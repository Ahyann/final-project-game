# Game API

Final Project Study Club Backend Basic (VeteranTech), dibuat oleh Ahyan Nubaid.

REST API sederhana untuk mengelola daftar game, memakai Node.js, Express, dan MongoDB Atlas.

## Cara Menjalankan

1. Clone repo ini lalu masuk ke foldernya
2. Jalankan `npm install`
3. Buat file `.env` di folder utama, isinya:

```
MONGO_URI=isi_connection_string_mongodb_kamu
PORT=3000
```

4. Jalankan `npm run dev`

Kalau berhasil, muncul `MongoDB terhubung` dan `Server jalan di http://localhost:3000`.

## Endpoint

| Method | URL | Fungsi |
|---|---|---|
| POST | /api/games | Tambah game |
| GET | /api/games | Lihat semua game |
| GET | /api/games/:id | Lihat satu game |
| PUT | /api/games/:id | Ubah game |
| DELETE | /api/games/:id | Hapus game |

Contoh body untuk POST:

```json
{
  "title": "Elden Ring",
  "genre": "RPG",
  "platform": "PS5",
  "rating": 10
}
```