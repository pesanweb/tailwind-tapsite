import { LitElement, html, css } from 'lit';

// Komponen Upsell Page Section
 class UpsellPageSection extends LitElement {
    static styles = css`
        /* Memasukkan gaya dasar dari main CSS */
        .card { /* Inherited from global .card definition */ }
        .btn-success { /* Inherited from global .btn-success definition */ }
        .btn-secondary { /* Inherited from global .btn-secondary definition */ }
    `;

    _respond(accepted) {
        this.dispatchEvent(new CustomEvent('upsell-responded', { detail: { accepted } }));
    }

    render() {
        return html`
            <div class="card text-center">
                <h2 class="text-3xl font-bold mb-4 text-yellow-500">Penawaran Spesial Terakhir Untuk Maksimalkan Hasil Diet Anda!</h2>
                <img src="https://placehold.co/400x250/fffbeb/f59e0b?text=Ecourse+Diet+Intensif" alt="Ecourse Diet Intensif" class="mx-auto mb-6 rounded-lg shadow-lg" onerror="this.src='https://placehold.co/400x250/e0e0e0/757575?text=Gambar+Tidak+Tersedia'">
                <p class="text-xl text-gray-700 mb-2">Dapatkan Akses Eksklusif ke <strong class="text-yellow-600">"Ecourse Diet Intensif Selama 30 Hari"</strong>!</p>
                <p class="text-gray-600 mb-6">Program video terstruktur, bimbingan ahli, grup komunitas, dan rencana makan lengkap untuk transformasi total. Harga normal Rp 999.000, khusus untuk Anda hari ini hanya <strong class="text-2xl text-green-600">Rp 499.000!</strong></p>
                <div class="flex justify-center space-x-4">
                    <button @click="${() => this._respond(true)}" class="btn btn-success text-lg px-8 py-3">Ya, Saya Mau Ecourse Ini!</button>
                    <button @click="${() => this._respond(false)}" class="btn btn-secondary">Tidak, Saya Lewatkan Penawaran Ini</button>
                </div>
            </div>
        `;
    }
}
customElements.define('upsell-page-section', UpsellPageSection);