import { LitElement, html, css } from 'lit';

// Komponen Order Bump Modal
 class OrderBumpModal extends LitElement {
    static properties = {
        visible: { type: Boolean },
    };

    static styles = css`
        /* Memasukkan gaya modal dari global CSS */
        .modal-overlay { /* Inherited from global .modal-overlay definition */ }
        .modal-content { /* Inherited from global .modal-content definition */ }
        .btn-success { /* Inherited from global .btn-success definition */ }
        .btn-secondary { /* Inherited from global .btn-secondary definition */ }
    `;

    constructor() {
        super();
        this.visible = false;
    }

    _respond(accepted) {
        this.dispatchEvent(new CustomEvent('order-bump-responded', { detail: { accepted } }));
    }
    
    render() {
        if (!this.visible) return html``;

        return html`
            <div class="modal-overlay">
                <div class="modal-content text-center">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">Tunggu Sebentar! Penawaran Spesial Untuk Anda!</h2>
                    <img src="https://placehold.co/300x200/e2e8f0/334155?text=Buku+Resep+Diet" alt="Buku Resep Diet" class="mx-auto mb-4 rounded-md shadow-sm" onerror="this.src='https://placehold.co/300x200/e0e0e0/757575?text=Gambar+Tidak+Tersedia'">
                    <p class="text-gray-600 mb-2">Tambahkan "Buku Resep Diet Sehat & Lezat" ke pesanan Anda hanya dengan <span class="font-bold text-green-600">Rp 49.000</span> (Normal Rp 99.000)!</p>
                    <p class="text-sm text-gray-500 mb-6">Berisi puluhan resep mudah diikuti untuk mendukung program diet Anda.</p>
                    <div class="flex justify-center space-x-4">
                        <button @click="${() => this._respond(true)}" class="btn btn-success">Ya, Tambahkan ke Pesanan!</button>
                        <button @click="${() => this._respond(false)}" class="btn btn-secondary">Tidak, Terima Kasih</button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('order-bump-modal', OrderBumpModal);