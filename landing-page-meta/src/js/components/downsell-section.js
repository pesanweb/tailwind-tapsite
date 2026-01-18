import { LitElement, html, css } from 'lit';

// Komponen Downsell Page Section
       class DownsellPageSection extends LitElement {
        static styles = css`
            /* Memasukkan gaya dasar dari main CSS */
            .card { /* Inherited from global .card definition */ }
            .btn-primary { /* Inherited from global .btn-primary definition */ }
            .btn-secondary { /* Inherited from global .btn-secondary definition */ }
        `;

        _respond(accepted) {
            this.dispatchEvent(new CustomEvent('downsell-responded', { detail: { accepted } }));
        }

        render() {
            return html`
                <div class="card text-center">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">Baik, Kami Mengerti. Bagaimana Dengan Ini?</h2>
                    <img src="https://placehold.co/350x200/e0f2fe/0ea5e9?text=DP+Ecourse+50%25" alt="DP Ecourse Diet" class="mx-auto mb-6 rounded-lg shadow-md" onerror="this.src='https://placehold.co/350x200/e0e0e0/757575?text=Gambar+Tidak+Tersedia'">
                    <p class="text-gray-700 mb-4">Kami benar-benar ingin Anda berhasil. Dapatkan <strong class="text-cyan-600">"Ecourse Diet Intensif"</strong> dengan membayar <strong class="text-cyan-600">DP 50% HANYA Rp 249.500</strong> sekarang!</p>
                    <p class="text-gray-600 mb-6">Sisa pembayaran dapat Anda lunasi dalam 30 hari ke depan. Kesempatan terbatas!</p>
                    <div class="flex justify-center space-x-4">
                        <button @click="${() => this._respond(true)}" class="btn btn-primary">Oke, Saya Ambil Tawaran DP Ini!</button>
                        <button @click="${() => this._respond(false)}" class="btn btn-secondary">Tidak, Terima Kasih</button>
                    </div>
                </div>
            `;
        }
    }
    customElements.define('downsell-page-section', DownsellPageSection);