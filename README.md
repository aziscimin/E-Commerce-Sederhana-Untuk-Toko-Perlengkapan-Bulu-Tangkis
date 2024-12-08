![image](https://github.com/user-attachments/assets/e1a240d2-ea0c-40ae-8acc-dcbb6aaa3928)**Deskripsi Proyek: E-Commerce Olahraga Bulu Tangkis**

Proyek ini adalah aplikasi e-commerce berbasis web yang dirancang untuk menjual perlengkapan bulu tangkis, seperti raket, shuttlecock, sepatu, tas, dan aksesoris. Aplikasi ini memungkinkan pengguna untuk menjelajahi produk, menambahkannya ke keranjang belanja, dan melanjutkan ke proses checkout. 

Berikut adalah fitur utama dan deskripsi teknis proyek ini:

---

### **Fitur Utama**
1. **Navigasi Produk Berdasarkan Kategori**  
   - Pengguna dapat memfilter produk berdasarkan kategori seperti raket, shuttlecock, sepatu, tas, atau aksesoris.  
   - Tersedia opsi untuk melihat semua produk dalam satu tampilan.

2. **Keranjang Belanja**  
   - Pengguna dapat menambahkan produk ke keranjang belanja.
   - Jumlah produk di keranjang diperbarui secara real-time.
   - Tampilan modal keranjang belanja memungkinkan pengguna untuk meninjau produk yang telah ditambahkan.

3. **Checkout dan Konfirmasi Pembelian**  
   - Halaman checkout menampilkan produk dalam keranjang, harga satuan, jumlah, subtotal, dan total keseluruhan.  
   - Pengguna dapat mengubah jumlah produk atau menghapus item sebelum checkout.
   - Data keranjang disimpan menggunakan `localStorage` untuk memastikan produk tetap tersedia selama sesi pengguna.

4. **Notifikasi Visual**  
   - Notifikasi muncul setiap kali produk berhasil ditambahkan ke keranjang untuk meningkatkan pengalaman pengguna.

---

### **Teknologi yang Digunakan**
1. **HTML & CSS**  
   - Struktur halaman dirancang responsif dengan tema olahraga yang modern dan profesional.  
   - Elemen visual seperti tabel checkout, navigasi kategori, dan footer memberikan pengalaman pengguna yang nyaman.

2. **JavaScript (Frontend)**  
   - Pengelolaan data produk, keranjang belanja, dan proses checkout sepenuhnya berbasis JavaScript.  
   - Penggunaan `localStorage` untuk menyimpan data keranjang antar halaman.

3. **Struktur Data Produk**  
   - Data produk disusun dalam objek `productsByCategory`, diorganisasikan berdasarkan kategori untuk mempermudah pengelolaan.

4. **Fungsi Interaktif**  
   - Fitur seperti pemformatan harga, pembatasan panjang nama produk, dan rendering dinamis tabel checkout memanfaatkan berbagai fungsi JavaScript.

---

### **Keunggulan Aplikasi**
1. **Kemudahan Penggunaan**  
   - Navigasi sederhana dan ramah pengguna untuk pengalaman belanja yang efisien.

2. **Efisiensi Data**  
   - Data keranjang disimpan di `localStorage`, memungkinkan pengguna melanjutkan transaksi tanpa kehilangan produk yang telah dipilih.

3. **Desain Profesional**  
   - Menggunakan tema warna hijau dan putih yang modern, relevan dengan konsep olahraga.

4. **Modular dan Skalabel**  
   - Struktur kode yang modular memudahkan pengembangan fitur tambahan, seperti pembayaran online atau integrasi API produk.

---

### **Cara Kerja**
1. **Pengguna Memilih Produk**  
   - Produk dapat dipilih berdasarkan kategori atau dilihat secara keseluruhan.
   
2. **Menambahkan Produk ke Keranjang**  
   - Pengguna menekan tombol "Tambah ke Keranjang" pada produk yang diinginkan.
   - Sistem memperbarui jumlah keranjang dan menyimpan data produk ke `localStorage`.

3. **Melakukan Checkout**  
   - Di halaman checkout, pengguna dapat mengubah jumlah produk atau menghapus item.
   - Sistem menghitung total harga belanja dan menampilkan rincian.

4. **Konfirmasi Pembayaran**  
   - Setelah checkout, pengguna akan menerima notifikasi pembayaran berhasil, dan keranjang akan dikosongkan.

---

### Preview E Commerce nya

![image](https://github.com/user-attachments/assets/81043f29-c890-4e64-9d6e-de0f2998a3ce)

![image](https://github.com/user-attachments/assets/24a11791-69cc-420a-8b2d-17e283016908)

---

### **Pengembangan Mendatang**
- **Integrasi Pembayaran Online**: Menambahkan fitur pembayaran melalui gateway pembayaran.  
- **Fitur Login & Akun Pengguna**: Menyimpan histori belanja pengguna dan memberikan rekomendasi produk.  
- **Sistem Rating & Ulasan Produk**: Membantu pengguna lain membuat keputusan pembelian.  
- **Pengelolaan Stok Produk**: Menampilkan jumlah stok yang tersedia untuk setiap produk.

Proyek ini dirancang untuk memberikan pengalaman belanja perlengkapan bulu tangkis yang cepat, mudah, dan efisien. 🎯
