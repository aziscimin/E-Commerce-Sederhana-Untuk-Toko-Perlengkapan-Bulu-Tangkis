// Format harga ke format ribuan
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Ambil data keranjang dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render tabel checkout
function renderCheckoutTable() {
    const tableBody = document.querySelector("#checkout-table tbody");
    const checkoutTotal = document.getElementById("checkout-total");
    tableBody.innerHTML = "";

    if (cart.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">Keranjang kosong. Silakan tambahkan produk ke keranjang.</td></tr>`;
        checkoutTotal.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const qty = item.qty || 1; // Pastikan jumlah (qty) ada
        const subtotal = item.price * qty;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${formatPrice(item.price)}</td>
            <td>
                <input type="number" value="${qty}" min="1" data-index="${index}" class="qty-input">
            </td>
            <td>Rp ${formatPrice(subtotal)}</td>
            <td><button class="remove-btn" data-index="${index}">Hapus</button></td>
        `;
        tableBody.appendChild(row);
    });

    checkoutTotal.textContent = formatPrice(total);
}

// Update jumlah produk
function updateQty(index, qty) {
    if (qty > 0) {
        cart[index].qty = qty;
        saveCart();
        renderCheckoutTable();
    }
}

// Hapus produk dari keranjang
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCheckoutTable();
}

// Simpan keranjang kembali ke localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Event listener untuk input qty
document.addEventListener("input", function (e) {
    if (e.target.classList.contains("qty-input")) {
        const index = e.target.dataset.index;
        const qty = parseInt(e.target.value, 10);
        updateQty(index, qty);
    }
});

// Event listener untuk tombol hapus
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
        removeItem(index);
    }
});

// Event listener untuk konfirmasi checkout
document.getElementById("confirm-checkout").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong!");
        return;
    }

    alert("Pembayaran berhasil! Terima kasih telah berbelanja.");
    cart = [];
    saveCart();
    renderCheckoutTable();
    window.location.href = "index.html";
});

// Render tabel saat halaman dimuat
renderCheckoutTable();
