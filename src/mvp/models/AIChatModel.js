import { GoogleGenerativeAI } from "@google/generative-ai";

// const GEMINI_API_KEY = "AIzaSyCxxeS6dm20h5IU4YqdkUE5AdAvOfI7M9E";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export default class AIChatModel {
    constructor() {
        if (!GEMINI_API_KEY || GEMINI_API_KEY.length < 30) {
            console.error("Kesalahan Konfigurasi API Key: Pastikan GEMINI_API_KEY sudah diisi dengan kunci yang valid.");
            throw new Error("Invalid Gemini API Key configuration.");
        }
        this.genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    async sendMessage(messages) {
        const lastUserMessage = messages[messages.length - 1]; 

        let cleanedHistory = [];
        let previousRole = null;

        for (let i = 0; i < messages.length - 1; i++) { 
            const msg = messages[i];
            if (msg.role === "system" || (msg.role === "assistant" && i === 0)) {
                continue;
            }

            const currentRole = msg.role === "user" ? "user" : "model";

            if (currentRole === previousRole) {
                console.warn(`[Gemini Chat] Peringatan: Peran berturut-turut (${currentRole}). Riwayat mungkin tidak sesuai format Gemini.`);

            }
            
            cleanedHistory.push({
                role: currentRole,
                parts: [{ text: msg.content }]
            });
            previousRole = currentRole;
        }

        console.log("Original Messages (from UI):", messages);
        console.log("Cleaned Conversation History (for Gemini API):", cleanedHistory);
        console.log("Last User Message (to send):", lastUserMessage.content);

        try {
            const chat = this.model.startChat({
                history: cleanedHistory, 
                generationConfig: {
                    maxOutputTokens: 1024,
                    temperature: 0.8,
                },

                systemInstruction: {
                    role: "system", 
                    parts: [{ text: "Jawab semua pertanyaan user dengan bahasa Indonesia yang sopan dan mudah dimengerti." }]
                }
            });

            const result = await chat.sendMessage(lastUserMessage.content);
            const response = await result.response;
            const text = response.text();

            return text || "Maaf, saya tidak bisa menjawab saat ini.";

        } catch (error) {
            console.error("Error communicating with Gemini API:", error);
            if (error.message.includes("API key not valid") || error.message.includes("api_key_invalid")) {
                return "Error: Kunci API Gemini tidak valid atau tidak terisi. Silakan periksa kunci Anda.";
            }
            if (error.message.includes("blocked")) {
                return "Maaf, respons AI diblokir karena kebijakan keamanan.";
            }
            if (error.response && error.response.candidates && error.response.candidates.length > 0 && error.response.candidates[0].finishReason === 'SAFETY') {
                return "Maaf, respons AI diblokir karena alasan keamanan.";
            }
            if (error.message.includes("First content should be with role 'user', got model") || error.message.includes("history must start with a user role")) {
                return "Terjadi masalah dengan riwayat percakapan. Coba mulai chat baru (pastikan riwayat dimulai dengan pertanyaan Anda).";
            }
            if (error.message.includes("404") && error.message.includes("not found for API version")) {
                return "Maaf, model AI tidak ditemukan atau tidak didukung di lokasi/versi API Anda. Coba ganti model.";
            }
            return "Maaf, server AI tidak tersedia atau terjadi kesalahan lain.";
        }
    }
}