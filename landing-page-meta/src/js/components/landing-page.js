import { LitElement, html, css } from 'lit';
class LandingPageApp extends LitElement {
    static properties = {
        currentPage: { type: String },
        formData: { type: Object },
        orderBumpAccepted: { type: Boolean },
        upsellAccepted: { type: Boolean },
        downsellAccepted: { type: Boolean },
        paymentProofName: { type: String },
    };

    constructor() {
        super();
        this.currentPage = 'form'; // Halaman awal
        this.formData = {};
        this.orderBumpAccepted = false;
        this.upsellAccepted = false;
        this.downsellAccepted = false;
        this.paymentProofName = '';
    }

    navigateTo(page) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

    handleFormSubmit(event) {
        this.formData = event.detail.formData;
        console.log('Form Data:', this.formData);
        this.navigateTo('orderBump');
    }

    handleOrderBump(event) {
        this.orderBumpAccepted = event.detail.accepted;
        console.log('Order Bump Accepted:', this.orderBumpAccepted);
        // Setelah order bump, langsung ke payment
        this.navigateTo('payment');
    }

    handlePaymentUpload(event) {
        this.paymentProofName = event.detail.fileName;
        console.log('Payment Proof Uploaded:', this.paymentProofName);
        // Setelah upload bukti bayar, lanjut ke upsell
        this.navigateTo('upsell');
    }

    handleUpsell(event) {
        this.upsellAccepted = event.detail.accepted;
        console.log('Upsell Accepted:', this.upsellAccepted);

        if (this.upsellAccepted) {
            // Jika upsell diterima, langsung ke payment untuk upload bukti bayar
            this.navigateTo('payment');
        } else {
            // Jika upsell ditolak, tawarkan downsell
            this.navigateTo('downsell');
        }
    }

    handleDownsell(event) {
        this.downsellAccepted = event.detail.accepted;
        console.log('Downsell Accepted:', this.downsellAccepted);

        if (this.downsellAccepted) {
            // Jika downsell diterima, ke halaman payment
            this.navigateTo('payment');
        } else {
            // Jika downsell ditolak, langsung ke thank you
            this.navigateTo('thankyou');
        }
    }

    render() {
        return html`
            <div class="container mx-auto max-w-2xl">
                ${this.currentPage === 'form' ? html`
                    <form-section @form-submitted="${this.handleFormSubmit}"></form-section>
                ` : ''}

                ${this.currentPage === 'orderBump' ? html`
                    <order-bump-modal 
                        .visible="${this.currentPage === 'orderBump'}"
                        @order-bump-responded="${this.handleOrderBump}">
                    </order-bump-modal>
                ` : ''}
                
                ${this.currentPage === 'payment' ? html`
                    <payment-instruction-section 
                        .orderBumpAccepted="${this.orderBumpAccepted}"
                        @payment-uploaded="${this.handlePaymentUpload}">
                    </payment-instruction-section>
                ` : ''}

                ${this.currentPage === 'upsell' ? html`
                    <upsell-page-section @upsell-responded="${this.handleUpsell}"></upsell-page-section>
                ` : ''}

                ${this.currentPage === 'downsell' ? html`
                    <downsell-page-section @downsell-responded="${this.handleDownsell}"></downsell-page-section>
                ` : ''}

                ${this.currentPage === 'thankyou' ? html`
                    <thank-you-section 
                        .formData="${this.formData}"
                        .orderBumpAccepted="${this.orderBumpAccepted}"
                        .upsellAccepted="${this.upsellAccepted}"
                        .downsellAccepted="${this.downsellAccepted}"
                        .paymentProofName="${this.paymentProofName}">
                    </thank-you-section>
                ` : ''}
            </div>
        `;
    }
}
customElements.define('landing-page-app', LandingPageApp);
