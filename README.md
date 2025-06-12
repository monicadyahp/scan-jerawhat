# JeraWHAT?! - Sistem Deteksi Jerawat dan Rekomendasi Kulit (Backend Hapi.js & Frontend React)

---

## Gambaran Umum Proyek

`JeraWHAT?!` adalah sebuah aplikasi komprehensif yang dirancang untuk membantu pengguna menganalisis kondisi kulit wajah mereka, khususnya jerawat, menggunakan teknologi kecerdasan buatan (AI). Aplikasi ini menyediakan fitur scan wajah instan, memberikan rekomendasi perawatan kulit personal, tips gaya hidup sehat, serta memungkinkan pengguna melacak riwayat scan mereka. Selain itu, aplikasi ini dilengkapi dengan fitur AI Chat untuk konsultasi dan kuis edukatif seputar kesehatan kulit, serta peta untuk menemukan klinik kecantikan terdekat.

Proyek ini terbagi menjadi dua bagian utama:

1.  **Backend (crud-hapi)**: Dibangun dengan **Hapi.js** yang berfungsi sebagai API server untuk menangani autentikasi pengguna (login, registrasi, profil), manajemen data artikel, kontak, dan penyimpanan riwayat scan AI. Integrasi dengan database dan penyimpanan file (gambar avatar dan riwayat scan) juga ditangani di sini.
2.  **Frontend (frontend-hapi)**: Dibangun dengan **React.js** dan **Vite** untuk antarmuka pengguna yang responsif dan interaktif. Frontend ini mengonsumsi API dari backend, menampilkan hasil scan dari model AI, dan menyediakan berbagai fitur edukatif serta utilitas.

---

## Fitur Utama

### Frontend

- **Halaman Beranda Interaktif**: Tampilan menarik dengan _swiper carousel_ yang memperkenalkan fitur-fitur utama.
- **Scan Wajah Bertenaga AI**:
  - Pengunggahan gambar wajah atau penggunaan kamera secara langsung.
  - Deteksi wajah dan klasifikasi kondisi jerawat (Ringan, Sedang, Parah) menggunakan model TensorFlow.js.
  - Rekomendasi gaya hidup (makanan dianjurkan/dilarang, aktivitas fisik, manajemen stres) berdasarkan hasil prediksi.
  - Fitur berbagi hasil scan ke media sosial.
  - Penyimpanan riwayat scan ke akun pengguna.
- **Riwayat Scan**: Melihat dan mengelola riwayat scan AI yang telah dilakukan.
- **Profil Pengguna**: Pengelolaan profil, termasuk unggah dan pembaruan avatar.
- **Artikel Edukatif**: Berbagai artikel tentang tips perawatan kulit, teknologi scan, dan nutrisi untuk kulit sehat.
- **Kuis Interaktif**: Uji pengetahuan tentang kesehatan kulit dengan berbagai topik kuis.
- **AI Chat (Gemini API)**: Konsultasi real-time tentang masalah kulit wajah menggunakan Google Gemini AI.
- **Peta Klinik Kecantikan**: Menemukan klinik kecantikan terdekat menggunakan Leaflet.js dengan data statis.
- **Rekomendasi Produk**: Rekomendasi produk perawatan kulit berdasarkan kondisi kulit.
- **Kontak Kami**: Formulir kontak untuk pertanyaan dan kolaborasi.
- **Autentikasi Pengguna**: Login dan Registrasi dengan pengelolaan sesi menggunakan Context API.

### Backend

- **Manajemen Pengguna**: Registrasi, login, dan pengelolaan profil pengguna.
- **Autentikasi JWT**: Penggunaan JSON Web Tokens (JWT) untuk mengamankan _endpoint_ API.
- **Manajemen Artikel**: CRUD (Create, Read, Update, Delete) untuk artikel blog.
- **Manajemen Kontak**: CRUD untuk pesan kontak dari pengguna.
- **Riwayat Scan AI**: Penyimpanan data riwayat scan AI, termasuk gambar yang diunggah.
- **Validasi Data**: Menggunakan Joi untuk validasi _payload_ permintaan.
- **Penyimpanan File**: Menangani unggahan gambar (avatar dan foto scan) ke sistem file server.
- **Integrasi Database**: Menggunakan Sequelize ORM untuk berinteraksi dengan database (asumsi MySQL/PostgreSQL/SQLite).

---

## Teknologi yang Digunakan

### Backend

- **Node.js**
- **Hapi.js**: _Framework_ web yang kuat dan dapat dikonfigurasi.
- **Sequelize**: ORM (Object-Relational Mapper) untuk interaksi database.
- **JWT (jsonwebtoken)**: Untuk autentikasi berbasis token.
- **bcryptjs**: Untuk _hashing password_ yang aman.
- **Joi**: Untuk validasi skema data.
- **multer** / **@hapi/h2o2**: Untuk menangani _upload_ file (sesuai konfigurasi Hapi).
- **fs** & **path**: Modul Node.js untuk manipulasi sistem file.
- **uuid**: Untuk menghasilkan ID unik.
- **slugify**: Untuk membuat "slug" yang _SEO-friendly_.

### Frontend

- **React.js**: _Library_ JavaScript untuk membangun antarmuka pengguna.
- **Vite**: _Tool bundler_ cepat untuk pengembangan React.
- **TensorFlow.js**: Untuk menjalankan model _machine learning_ di _browser_ (deteksi wajah dan jerawat).
- **Google Generative AI (Gemini API)**: Untuk fitur AI Chat.
- **React Router DOM**: Untuk _routing_ di aplikasi _single-page_.
- **Leaflet.js** & **react-leaflet**: Untuk menampilkan peta interaktif.
- **Swiper.js** & **swiper/react**: Untuk _carousel_ di halaman beranda.
- **ScrollReveal**: Untuk efek animasi _scroll_.
- **SweetAlert2**: Untuk notifikasi dan _pop-up_ yang menarik.
- **Context API**: Untuk manajemen _state_ global (autentikasi).

---

## Deployed Link

Aplikasi frontend ini sudah di-deploy dan bisa diakses melalui link berikut:

**[https://scan-jerawhat.vercel.app/](https://scan-jerawhat.vercel.app/)**

---

## Instalasi dan Setup

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

### 1. Klon Repositori

```bash
git clone <URL_REPOSITORI_ANDA>
cd <nama_folder_repositori>
```
