const productsByCategory = {
    raket: [
        { id: 1, name: "Raket Yonex Astrox 88", price: 1800000, image: "../assest/raket yonex astrox.jpg" },
        { id: 2, name: "Raket Lining Turbo X", price: 750000, image: "../assest/Liningx50.jpg" },
        { id: 3, name: "Raket Victor Thruster", price: 1200000, image: "../assest/victor.jpg" },
        { id: 4, name: "Raket Wilson Recon PX", price: 950000, image: "../assest/reconpx.jpg" },
    ],
    shuttlecock: [
        { id: 5, name: "Shuttlecock Yonex Aerosensa", price: 250000, image: "../assest/aerosensa.jpg" },
        { id: 6, name: "Shuttlecock Victor Master", price: 220000, image: "../assest/victor6.jpg" },
        { id: 7, name: "Shuttlecock Lining A+60", price: 300000, image: "../assest/lininga.jpg" },
        { id: 8, name: "Shuttlecock Mizuno 700", price: 270000, image: "../assest/mizuno700.jpg" },
    ],
    sepatu: [
        { id: 9, name: "Sepatu Yonex Power Cushion", price: 850000, image: "../assest/sepatuyonex.jpg" },
        { id: 10, name: "Sepatu Lining Attack G6", price: 780000, image: "../assest/sepatulining.jpeg" },
        { id: 11, name: "Sepatu Victor SH-A920", price: 820000, image: "../assest/sepatuvictor.jpg" },
        { id: 12, name: "Sepatu Mizuno Wave Fang", price: 900000, image: "../assest/sepatumizuno.jpg" },
    ],
    tas: [
        { id: 13, name: "Tas Yonex Sunrise", price: 350000, image: "../assest/tasyonex.jpg" },
        { id: 14, name: "Tas Lining ABDR 659 Black Original", price: 400000, image: "../assest/taslining.jpg" },
        { id: 15, name: "Tas Victor BR6213 RB", price: 380000, image: "../assest/tasvictor.jpg" },
        { id: 16, name: "Tas Wilson Racket Bag", price: 300000, image: "../assest/taswilson1.jpg" },
    ],
    aksesoris: [
        { id: 17, name: "Grip Yonex Super Grap", price: 75000, image: "../assest/gripyonex.jpg" },
        { id: 18, name: "Kaos Kaki Bulu Tangkis", price: 80000, image: "../assest/kaoskaki.jpg" },
        { id: 19, name: "Pelindung Kepala Raket", price: 90000, image: "../assest/pelindungraket.jpg" },
        { id: 20, name: "Grip Karet Raket", price: 50000, image: "../assest/karetantislip.jpg" },
    ],
};

let cart = [];

// Format harga ke format ribuan
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi untuk menampilkan produk
function displayProducts(category = "all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let productsToDisplay = [];

    if (category === "all") {
        for (let key in productsByCategory) {
            productsToDisplay = productsToDisplay.concat(productsByCategory[key]);
        }
    } else {
        productsToDisplay = productsByCategory[category] || [];
    }

    if (productsToDisplay.length === 0) {
        productList.innerHTML = "<p>Tidak ada produk untuk kategori ini.</p>";
        return;
    }

    productsToDisplay.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${truncateName(product.name)}</h3>
            <p>Rp ${formatPrice(product.price)}</p>
            <button onclick="addToCart(${product.id}, '${category}')">Tambah ke Keranjang</button>
        `;

        productList.appendChild(productEl);
    });
}

// Fungsi menambahkan produk ke keranjang
function addToCart(productId, category) {
    const product = Object.values(productsByCategory).flat().find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

// Fungsi memperbarui jumlah keranjang
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Menampilkan keranjang
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp ${formatPrice(item.price)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = formatPrice(total);
    cartModal.style.display = "flex";
}

// Menutup modal keranjang
function hideCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Checkout
function goToCheckout() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong!");
        return;
    }

    const checkoutData = cart.map(item => `${item.name}: Rp ${formatPrice(item.price)}`).join("\n");
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    alert(`Checkout:\n${checkoutData}\n\nTotal: Rp ${formatPrice(total)}`);
    cart = [];
    updateCartCount();
    hideCart();
    displayProducts();
}

// Filter produk
function filterProducts(category) {
    displayProducts(category);
}

// Inisialisasi
displayProducts();

// Fungsi untuk memotong nama produk jika terlalu panjang
function truncateName(name, maxLength = 21) {
    return name.length > maxLength ? name.slice(0, maxLength - 3) + "..." : name;
}

// Fungsi untuk menampilkan produk dengan pembatasan panjang nama
function displayProducts(category = "all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let productsToDisplay = [];

    if (category === "all") {
        for (let key in productsByCategory) {
            productsToDisplay = productsToDisplay.concat(productsByCategory[key]);
        }
    } else {
        productsToDisplay = productsByCategory[category] || [];
    }

    if (productsToDisplay.length === 0) {
        productList.innerHTML = "<p>Tidak ada produk untuk kategori ini.</p>";
        return;
    }

    productsToDisplay.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${truncateName(product.name)}</h3>
            <p>Rp ${formatPrice(product.price)}</p>
            <button onclick="addToCart(${product.id}, '${category}')">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productEl);
    });
}

// Pindah ke halaman checkout
function goToCheckoutPage() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong!");
        return;
    }

    // Simpan data keranjang di localStorage agar bisa diakses di halaman checkout
    localStorage.setItem("cart", JSON.stringify(cart));

    // Arahkan ke halaman checkout
    window.location.href = "file:///C:/Users/Azis/Documents/coba/e%20commerce/chekcout/checkout.html";
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId, category) {
    const product = Object.values(productsByCategory).flat().find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        // Notifikasi visual dapat digunakan di sini jika diinginkan
        console.log(`${product.name} berhasil ditambahkan ke keranjang.`); // Hanya log ke console tanpa alert
    }
}

// Fungsi memperbarui jumlah keranjang
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Menampilkan keranjang
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Keranjang Anda kosong.</p>";
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - Rp ${formatPrice(item.price)}`;
            cartItems.appendChild(li);
        });
    }

    cartModal.style.display = "flex";
}

// Menutup modal keranjang
function hideCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    // Sembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}

function addToCart(productId, category) {
    const product = Object.values(productsByCategory).flat().find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification(`${product.name} berhasil ditambahkan ke keranjang.`);
    }
}




