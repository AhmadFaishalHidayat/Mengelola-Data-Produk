# Mengelola-Data-Produk
## Test I
Buat REST API sederhana dengan Node.js dan MongoDB untuk mengelola data produk.
1. Endpoint yang diminta:
  a. GET /products: Mengambil daftar semua produk.
  b. POST /products: Menambahkan produk baru (dengan validasi nama dan harga).
  c. PUT /products/:id: Mengupdate data produk berdasarkan ID.
  d. DELETE /products/:id: Menghapus produk berdasarkan ID.
2. Spesifikasi:
  a. Database: Gunakan MongoDB.
  b. Framework: Gunakan Express.js.
  c. Validasi: Gunakan library seperti Joi untuk validasi input.
  d. Dokumentasi: Sertakan dokumentasi API sederhana dengan contoh request dan 
  response.

## Test II
Buat sistem message broker sederhana menggunakan RabbitMQ.
Detail:
1. Implementasikan publisher dan consumer menggunakan RabbitMQ.
2. Simulasikan pengiriman pesan dari aplikasi frontend (misalnya, permintaan pembuatan 
produk).
3. Consumer harus membaca pesan tersebut dan menyimpannya ke MongoDB.

## Test III
Berikan frontend Vue.js sederhana yang membutuhkan data dari API backend (yang dibuat di 
tes sebelumnya).
1. Buat tampilan dengan Vue.js untuk:
  a. Menampilkan daftar produk.
  b. Formulir untuk menambahkan produk baru.
  c. Tombol untuk menghapus produk.
2. Integrasikan frontend dengan backend menggunakan Axios.
