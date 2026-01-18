import { LitElement, html, css } from 'lit';

// Komponen Thank You Section
     class ThankYouSection extends LitElement {
        static properties = {
            formData: { type: Object },
            orderBumpAccepted: { type: Boolean },
            upsellAccepted: { type: Boolean },
            downsellAccepted: { type: Boolean },
            paymentProofName: { type: String },
        };

        static styles = css`
            /* Memasukkan gaya dasar dari main CSS */
            .card { /* Inherited from global .card definition */ }
        `;

        render() {
            return html`
                <div class="card text-center">
                    <svg class="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h2 class="text-3xl font-bold mb-4 text-gray-800">Terima Kasih, ${this.formData.name}!</h2>
                    <p class="text-gray-700 mb-2">Pesanan Anda telah kami terima dan sedang diproses.</p>
                    <p class="text-gray-600 mb-6">Bukti pembayaran Anda (<span class="font-semibold">${this.paymentProofName}</span>) akan segera kami verifikasi. Informasi lebih lanjut akan kami kirimkan ke email <span class="font-semibold">${this.formData.email}</span>.</p>
                    
                    <div class="bg-gray-50 p-4 rounded-md mb-6 text-left">
                        <h3 class="text-lg font-semibold mb-2 text-gray-700">Ringkasan Pesanan:</h3>
                        <ul class="list-disc list-inside ml-4 text-gray-600">
                            <li>Ebook Diet Eksklusif</li>
                            ${this.orderBumpAccepted ? html`<li>Buku Resep Diet Sehat</li>` : ''}
                            ${this.upsellAccepted ? html`<li>Ecourse Diet Intensif (Lunas)</li>` : ''}
                            ${!this.upsellAccepted && this.downsellAccepted ? html`<li>Ecourse Diet Intensif (DP 50%)</li>` : ''}
                        </ul>
                    </div>
                    <p class="text-sm text-gray-500">Jika ada pertanyaan, silakan hubungi kami melalui WhatsApp di nomor yang Anda daftarkan.</p>
                </div>
            `;
        }
    }
    customElements.define('thank-you-section', ThankYouSection);