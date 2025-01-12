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

# API DOCS

## GET /products

### Response :

```js
  [
    {
        "_id": "67838ff375b592953be2c012",
        "name": "Sabun Lesboy",
        "price": 500000,
        "createdAt": "2025-01-12T09:48:35.588Z",
        "updatedAt": "2025-01-12T09:51:46.206Z",
        "__v": 0
    },
    {
        "_id": "6783903075b592953be2c014",
        "name": "Wortel",
        "price": 20000,
        "createdAt": "2025-01-12T09:49:36.928Z",
        "updatedAt": "2025-01-12T09:49:36.928Z",
        "__v": 0
    }...
]
```

## POST /products

### Request Body :

```js
{
    "name": "Sabun Lesboy",
    "price": 500000
}
```

### Response:
#### Jika Berhasil (201) :

```js
{
    "_id": "67838ff375b592953be2c012",
    "name": "Sabun Lesboy",
    "price": 500000,
    "createdAt": "2025-01-12T09:48:35.588Z",
    "updatedAt": "2025-01-12T09:51:46.206Z",
    "__v": 0
}
```
### 400 Bad Request:
```js
{
    "error": "\"name\" length must be at least 3 characters long"
}
atau
{
    "error": "\"name\" must be a string"
}
atau
{
    "error": "\"name\" is required"
}
atau
{
    "error": "\"price\" must be a positive number"
}
atau
{
    "error": "\"price\" must be a number"
}
atau
{
    "error": "\"price\" is required"
}
```


## PUT /products/:id
### Request Body :

```js
{
    "name": "Sabun Lesboy1",
    "price": 400000
}
```

### Response:
#### status (200) Jika berhasil
```js
{
    "_id": "67838ff375b592953be2c012",
    "name": "Sabun Lesboy1",
    "price": 400000,
    "createdAt": "2025-01-12T09:48:35.588Z",
    "updatedAt": "2025-01-12T10:13:15.698Z",
    "__v": 0
}
```

#### status (404) Not Found
```js
{
    "message": "Product not found"
}
```
### 400 Bad Request:
```js
{
    "error": "\"name\" length must be at least 3 characters long"
}
atau
{
    "error": "\"name\" must be a string"
}
atau
{
    "error": "\"name\" is required"
}
atau
{
    "error": "\"price\" must be a positive number"
}
atau
{
    "error": "\"price\" must be a number"
}
atau
{
    "error": "\"price\" is required"
}
```


## DELETE /products/:id

### Response:
#### status (200) Jika berhasil
```js
{
    "message": "Product <nama_product> deleted successfully"
}
```

#### status (404) Not Found
```js
{
    "message": "Product not found"
}
```

## GLOBAL ERROR
### Response:
#### status (500) Internal Server Error
```js
{
  message: "error.message"
}
```