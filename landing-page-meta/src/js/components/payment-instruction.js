import { LitElement, html, css } from 'lit';

// Komponen Payment Instruction Section
  class PaymentInstructionSection extends LitElement {
    static properties = {
        orderBumpAccepted: { type: Boolean },
        fileName: { type: String },
        errorMessage: { type: String } // Properti baru untuk pesan error
    };

    static styles = css`
        /* Memasukkan gaya dasar dari main CSS */
        .card { /* Inherited from global .card definition */ }
        .input-field { /* Inherited from global .input-field definition */ }
        .btn-primary { /* Inherited from global .btn-primary definition */ }
        .error-message { /* Inherited from global .error-message definition */ }
    `;

    constructor() {
        super();
        this.orderBumpAccepted = false;
        this.fileName = '';
        this.errorMessage = ''; // Inisialisasi pesan error
    }

    _handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.errorMessage = ''; // Clear error message on file selection
            // Di aplikasi nyata, Anda akan memproses file ini
            console.log('File selected:', file.name);
        } else {
            this.fileName = '';
        }
    }

    _submitProof() {
        if (!this.fileName) {
            this.errorMessage = 'Harap unggah bukti pembayaran Anda.';
            return;
        }
        this.dispatchEvent(new CustomEvent('payment-uploaded', { detail: { fileName: this.fileName } }));
    }

    render() {
        const totalAmount = 100000 + (this.orderBumpAccepted ? 49000 : 0); // Contoh harga Ebook Rp 100.000
        return html`
            <div class="card">
                <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Instruksi Pembayaran</h2>
                <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-md" role="alert">
                    <p class="font-bold">Detail Pesanan Anda:</p>
                    <ul class="list-disc list-inside ml-4">
                        <li>Ebook Diet Eksklusif: Rp 100.000</li>
                        ${this.orderBumpAccepted ? html`<li>Buku Resep Diet Sehat: Rp 49.000</li>` : ''}
                    </ul>
                    <p class="font-bold mt-2">Total Pembayaran: Rp ${totalAmount.toLocaleString('id-ID')}</p>
                </div>

                <p class="text-gray-700 mb-4">Silakan lakukan pembayaran ke rekening berikut:</p>
                <div class="bg-gray-50 p-4 rounded-md mb-6">
                    <p><strong>Bank XYZ</strong></p>
                    <p>No. Rekening: <span class="font-semibold">123-456-7890</span></p>
                    <p>Atas Nama: <span class="font-semibold">PT Diet Sejahtera</span></p>
                </div>
                
                <p class="text-gray-700 mb-2">Setelah melakukan pembayaran, harap unggah bukti transfer Anda di bawah ini:</p>
                <div class="mb-4">
                    <label for="paymentProof" class="block text-sm font-medium text-gray-700 mb-1">Unggah Bukti Pembayaran</label>
                    <input type="file" id="paymentProof" @change="${this._handleFileUpload}" class="input-field" accept="image/*,.pdf" required>
                    ${this.fileName ? html`<p class="text-sm text-green-600 mt-1">File terpilih: ${this.fileName}</p>` : ''}
                    ${this.errorMessage ? html`<p class="error-message">${this.errorMessage}</p>` : ''}
                </div>
                <button @click="${this._submitProof}" class="btn btn-primary w-full">Konfirmasi Pembayaran</button>
            </div>
        `;
    }
}
customElements.define('payment-instruction-section', PaymentInstructionSection);
