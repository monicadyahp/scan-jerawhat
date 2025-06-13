JeraWHAT?! - Sistem Deteksi Jerawat dan Rekomendasi Kulit (Backend Hapi.js & Frontend React)
Gambaran Umum Proyek
JeraWHAT?! adalah sebuah aplikasi komprehensif yang dirancang untuk membantu pengguna menganalisis kondisi kulit wajah mereka, khususnya jerawat, menggunakan teknologi kecerdasan buatan (AI). Aplikasi ini menyediakan fitur scan wajah instan, memberikan rekomendasi perawatan kulit personal, tips gaya hidup sehat, serta memungkinkan pengguna melacak riwayat scan mereka. Selain itu, aplikasi ini dilengkapi dengan fitur AI Chat untuk konsultasi dan kuis edukatif seputar kesehatan kulit, serta peta untuk menemukan klinik kecantikan terdekat.

Proyek ini terbagi menjadi dua bagian utama:

Backend (crud-hapi): Dibangun dengan Hapi.js yang berfungsi sebagai API server untuk menangani autentikasi pengguna (login, registrasi, profil), manajemen data artikel, kontak, dan penyimpanan riwayat scan AI. Integrasi dengan database dan penyimpanan file (gambar avatar dan riwayat scan) juga ditangani di sini.

Frontend (frontend-hapi): Dibangun dengan React.js dan Vite untuk antarmuka pengguna yang responsif dan interaktif. Frontend ini mengonsumsi API dari backend, menampilkan hasil scan dari model AI, dan menyediakan berbagai fitur edukatif serta utilitas.

Fitur Utama
Frontend
Halaman Beranda Interaktif: Tampilan menarik dengan swiper carousel yang memperkenalkan fitur-fitur utama.

Scan Wajah Bertenaga AI:

Pengunggahan gambar wajah atau penggunaan kamera secara langsung.

Deteksi wajah dan klasifikasi kondisi jerawat (Ringan, Sedang, Parah) menggunakan model TensorFlow.js.

Rekomendasi gaya hidup (makanan dianjurkan/dilarang, aktivitas fisik, manajemen stres) berdasarkan hasil prediksi.

Fitur berbagi hasil scan ke media sosial.

Penyimpanan riwayat scan ke akun pengguna.

Riwayat Scan: Melihat dan mengelola riwayat scan AI yang telah dilakukan.

Profil Pengguna: Pengelolaan profil, termasuk unggah dan pembaruan avatar.

Artikel Edukatif: Berbagai artikel tentang tips perawatan kulit, teknologi scan, dan nutrisi untuk kulit sehat.

Kuis Interaktif: Uji pengetahuan tentang kesehatan kulit dengan berbagai topik kuis.

AI Chat (Gemini API): Konsultasi real-time tentang masalah kulit wajah menggunakan Google Gemini AI.

Peta Klinik Kecantikan: Menemukan klinik kecantikan terdekat menggunakan Leaflet.js dengan data statis.

Rekomendasi Produk: Rekomendasi produk perawatan kulit berdasarkan kondisi kulit.

Kontak Kami: Formulir kontak untuk pertanyaan dan kolaborasi.

Autentikasi Pengguna: Login dan Registrasi dengan pengelolaan sesi menggunakan Context API.

Backend
Manajemen Pengguna: Registrasi, login, dan pengelolaan profil pengguna.

Autentikasi JWT: Penggunaan JSON Web Tokens (JWT) untuk mengamankan endpoint API.

Manajemen Artikel: CRUD (Create, Read, Update, Delete) untuk artikel blog.

Manajemen Kontak: CRUD untuk pesan kontak dari pengguna.

Riwayat Scan AI: Penyimpanan data riwayat scan AI, termasuk gambar yang diunggah.

Validasi Data: Menggunakan Joi untuk validasi payload permintaan.

Penyimpanan File: Menangani unggahan gambar (avatar dan foto scan) ke sistem file server.

Integrasi Database: Menggunakan Sequelize ORM untuk berinteraksi dengan database (asumsi MySQL/PostgreSQL/SQLite).

Teknologi yang Digunakan
Backend
Node.js

Hapi.js: Framework web yang kuat dan dapat dikonfigurasi.

Sequelize: ORM (Object-Relational Mapper) untuk interaksi database.

JWT (jsonwebtoken): Untuk autentikasi berbasis token.

bcryptjs: Untuk hashing password yang aman.

Joi: Untuk validasi skema data.

multer / @hapi/h2o2: Untuk menangani upload file (sesuai konfigurasi Hapi).

fs & path: Modul Node.js untuk manipulasi sistem file.

uuid: Untuk menghasilkan ID unik.

slugify: Untuk membuat "slug" yang SEO-friendly.

Frontend
React.js: Library JavaScript untuk membangun antarmuka pengguna.

Vite: Tool bundler cepat untuk pengembangan React.

TensorFlow.js: Untuk menjalankan model machine learning di browser (deteksi wajah dan jerawat).

Google Generative AI (Gemini API): Untuk fitur AI Chat.

React Router DOM: Untuk routing di aplikasi single-page.

Leaflet.js & react-leaflet: Untuk menampilkan peta interaktif.

Swiper.js & swiper/react: Untuk carousel di halaman beranda.

ScrollReveal: Untuk efek animasi scroll.

SweetAlert2: Untuk notifikasi dan pop-up yang menarik.

Context API: Untuk manajemen state global (autentikasi).

Deployed Link
Aplikasi frontend ini sudah di-deploy dan bisa diakses melalui link berikut:

https://scan-jerawhat.vercel.app/

Instalasi dan Setup
Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. Klon Repositori
   git clone <URL_REPOSITORI_ANDA>
   cd <nama_folder_repositori>

2. Setup Backend (crud-hapi)
   cd crud-hapi
   npm install

Konfigurasi Database:

Pastikan kamu memiliki database yang berjalan (misalnya MySQL, PostgreSQL).

Buat file .env di direktori crud-hapi dan isi dengan konfigurasi database serta JWT Secret:

DB_DIALECT=mysql # atau postgres, sqlite
DB_HOST=localhost
DB_PORT=3306 # atau port database Anda
DB_USER=root
DB_PASSWORD=password
DB_NAME=jerawhat_db
JWT_SECRET=wS!9xMvB3$ZrTq7Y#jD2@LfVgXeN6pA0 # Ganti dengan secret key yang kuat dan unik

Jalankan migrasi database dan seed data (jika ada):

npx sequelize-cli db:migrate

# Jika ada seeders:

# npx sequelize-cli db:seed:all

Jalankan Backend:

npm start

Backend akan berjalan di http://localhost:3000 (atau port yang kamu konfigurasi di Hapi).

3. Setup Frontend (frontend-hapi)
   cd ../frontend-hapi
   npm install

Konfigurasi Environment Frontend:

Buat file .env di direktori frontend-hapi dan isi dengan URL API backend dan Gemini API Key:

VITE_API_BASE_URL=http://localhost:3000 # Sesuaikan jika backend berjalan di port lain
VITE_GEMINI_API_KEY=AIzaSyCxxeS6dm20h5IU4YdkUE5AdAvOfI7M9E # Ganti dengan Gemini API Key Anda

Penting: Ganti VITE_GEMINI_API_KEY dengan kunci API Gemini yang valid dari Google AI Studio. Kunci API yang ada di kode saat ini adalah placeholder dan kemungkinan tidak berfungsi.

Jalankan Frontend:

npm run dev

Frontend akan berjalan di http://localhost:5173 (atau port yang diberikan oleh Vite).

4. Deploy ke Vercel (Opsional)
   Jika kamu ingin melakukan deploy aplikasi ini:

Frontend React (frontend-hapi): Aplikasi React ini dapat dengan mudah di-deploy ke Vercel atau platform static site hosting lainnya (Netlify, GitHub Pages) karena sudah di-bundle sebagai aset statis. Pastikan variabel lingkungan VITE_API_BASE_URL di Vercel diatur agar mengarah ke URL backend Hapi.js yang sudah di-deploy.

Fungsi Serverless API (api/): File di folder api/ dirancang untuk Vercel Serverless Functions. Namun, perlu diingat bahwa backend Hapi.js (crud-hapi) adalah server API lengkap yang memerlukan lingkungan Node.js persisten (misalnya: VPS, Heroku, Render, Google Cloud Run), bukan fungsi serverless yang stateless. Jika kamu ingin menggunakan serverless functions untuk API Hapi, kamu perlu refaktor controller Hapi untuk berfungsi sebagai fungsi individual yang dapat di-deploy terpisah.

Penggunaan
Setelah aplikasi berjalan:

Registrasi: Buat akun baru di halaman /register.

Login: Masuk ke aplikasi menggunakan akun yang sudah terdaftar.

Scan Wajah: Kunjungi halaman /scan untuk mengunggah foto atau menggunakan kamera untuk menganalisis kondisi jerawat.

Jelajahi Fitur Lain:

/profile: Lihat dan update profil.

/scan/history: Lihat riwayat scan Anda.

/articles: Baca artikel edukatif.

/quiz: Ikuti kuis.

/ai-chat: Bertanya kepada AI.

/maps: Cari klinik kecantikan.

/rekomendasi: Dapatkan rekomendasi produk.

Kontribusi
Kontribusi disambut baik! Jika kamu ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

Fork repositori ini.

Buat branch baru (git checkout -b feature/nama-fitur).

Lakukan perubahan dan commit (git commit -m 'Tambahkan fitur baru').

Push ke branch Anda (git push origin feature/nama-fitur).

Buat Pull Request.

Lisensi
Proyek ini dilisensikan di bawah MIT License.
