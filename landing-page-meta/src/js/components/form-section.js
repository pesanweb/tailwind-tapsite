import { LitElement, html, css } from 'lit';

// Komponen Form Section
   class FormSection extends LitElement {
    static properties = {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        errorMessage: { type: String }, // Properti baru untuk pesan error
    };

    static styles = css`
        /* Memasukkan gaya dasar dari main CSS atau mendefinisikan ulang sesuai kebutuhan */
        .card {
            max-width: 400px;
            margin: 0 auto;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background: white;
            text-align: center;
        }
        h1 {
            font-size: 1.875rem; /* text-3xl */
            font-weight: bold;
            margin-bottom: 1.5rem; /* mb-6 */
            color: #1f2937; /* text-gray-800 */
        }
        p {
            font-size: 1rem;
            color: #4b5563; /* text-gray-600 */
            margin-bottom: 2rem; /* mb-8 */
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem; /* Adjusted for space-y-6 equivalent */
        }
        label {
            font-size: 0.875rem; /* text-sm */
            font-weight: 500;
            color: #374151; /* text-gray-700 */
            text-align: left;
            margin-bottom: 0.25rem; /* mb-1 */
            display: block; /* Ensure label takes full width */
        }
        .input-field {
            padding: 0.5rem;
            font-size: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            width: 100%;
            box-sizing: border-box; /* Ensure padding doesn't increase width */
        }
        .btn { /* Inherited from global .btn definition */ }
        .btn-primary { /* Inherited from global .btn-primary definition */ }
        .error-message { /* Inherited from global .error-message definition */ }
    `;

    constructor() {
        super();
        this.name = '';
        this.email = '';
        this.phone = '';
        this.errorMessage = ''; // Inisialisasi pesan error
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.errorMessage = ''; // Reset pesan error setiap kali submit

        if (!this.name || !this.email || !this.phone) {
            this.errorMessage = 'Harap isi semua field yang wajib diisi!';
            return;
        }
        const formData = { name: this.name, email: this.email, phone: this.phone };
        this.dispatchEvent(new CustomEvent('form-submitted', { detail: { formData } }));
    }

    render() {
        return html`
            <div class="card">
                <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Dapatkan Ebook Diet Eksklusif!</h1>
                <p class="text-center text-gray-600 mb-8">Mulai perjalanan diet sehat Anda hari ini dengan panduan lengkap dari kami. Isi formulir di bawah ini untuk mendapatkan Ebook Diet Gratis!</p>
                <form @submit="${this._handleSubmit}" class="space-y-6">
                    <div>
                        <label for="name">Nama Lengkap</label>
                        <input id="name" type="text" .value="${this.name}" @input="${e => this.name = e.target.value}" class="input-field" placeholder="John Doe" required>
                    </div>
                    <div>
                        <label for="email">Alamat Email</label>
                        <input id="email" type="email" .value="${this.email}" @input="${e => this.email = e.target.value}" class="input-field" placeholder="anda@email.com" required>
                    </div>
                    <div>
                        <label for="phone">Nomor Telepon (WhatsApp)</label>
                        <input id="phone" type="tel" .value="${this.phone}" @input="${e => this.phone = e.target.value}" class="input-field" placeholder="081234567890" required>
                    </div>
                    ${this.errorMessage ? html`<p class="error-message">${this.errorMessage}</p>` : ''}
                    <button type="submit" class="btn btn-primary w-full">Dapatkan Ebook Sekarang!</button>
                </form>
            </div>
        `;
    }
}
customElements.define('form-section', FormSection);