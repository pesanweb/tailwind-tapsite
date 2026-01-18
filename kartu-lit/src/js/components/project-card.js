import { LitElement, html, css } from 'lit';

class ProjectCard extends LitElement {
  static properties = {
    date: { type: String },
    title: { type: String },
    description: { type: String },
    progress: { type: Number },
    avatars: { type: Array },
    countdownText: { type: String },
    cardColorClass: { type: String }, // e.g., 'green', 'blue'
  };

  // Konversi CSS yang ada ke dalam static styles
  static styles = css`
    /* Salin dan sesuaikan CSS dari HTML asli ke sini */
    /* Pastikan selector mungkin perlu disesuaikan untuk Shadow DOM */
    /* Contoh: :host akan merujuk ke elemen komponen itu sendiri */
    :host {
      display: block; /* Komponen kustom biasanya block */
      max-width: 20rem;
      min-height: 22rem;
      width: 90%;
      /* ... dan seterusnya ... */
    }

    .card {
      /* ... (gaya untuk .card dari CSS asli) ... */
      /* Anda mungkin perlu mengganti variabel CSS global dengan nilai langsung
         atau meneruskannya melalui properti jika perlu dinamis per kartu */
      position: relative;
      z-index: 555;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      box-shadow: 0.063em 0.75em 1.563em rgba(0, 0, 0, 0.78);
      border-radius: 2.25rem;
      overflow: hidden;
      /* Warna latar belakang dan border akan diatur oleh cardColorClass */
    }

    /* Tambahkan semua gaya lain dari .card, .card-header, .card-body, .card-footer, dll. */
    /* ... */

    /* Gaya spesifik warna bisa diterapkan berdasarkan this.cardColorClass */
    .green {
      background: radial-gradient( ellipse at right top, #107667ed 0%, var(--clr-card-base, #151419) 47%, var(--clr-card-base, #151419) 100% );
    }
    .green::before { /* Ini mungkin perlu pendekatan berbeda di Shadow DOM */
      background: linear-gradient( 45deg, var(--clr-background, #232228), var(--clr-background, #232228), var(--clr-background, #232228), var(--clr-background, #232228), var(--clr-green, #01c3a8) ) border-box;
    }
    .green .btn-add { background: var(--clr-green, #01c3a8); }
    .green .progress-bar::after { width: var(--progress-width, 0%); background: var(--clr-green, #01c3a8); }
    .green .btn-countdown:hover { background: var(--clr-green, #01c3a8); }
    
    /* ... (gaya untuk blue, orange, red) ... */

    .progress-bar::after {
      /* Kita akan set width ini secara dinamis */
      width: var(--progress-dynamic-width, 0%); 
    }
  `;

  constructor() {
    super();
    // Inisialisasi default properti
    this.date = 'N/A';
    this.title = 'Project Title';
    this.description = 'Description';
    this.progress = 0;
    this.avatars = [];
    this.countdownText = 'N/A';
    this.cardColorClass = 'green'; // Default color
  }

  render() {
    // Perhatikan penggunaan this.cardColorClass untuk menerapkan kelas warna
    // dan style map untuk progress bar
    const progressStyle = `width: ${this.progress}%;`;
    
    return html`
      <div class="card ${this.cardColorClass}">
        <style>
          /* Gaya dinamis untuk progress bar, menggunakan CSS variable yang di-scope ke shadow DOM */
          /* Ini adalah cara untuk membuat pseudo-element dinamis berdasarkan properti */
          .card.${this.cardColorClass} .progress-bar::after {
            background: var(--clr-${this.cardColorClass});
            width: ${this.progress}%;
          }
        </style>
        <div class="card-header">
          <div class="date">${this.date}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:2rem; height:2rem;">
            <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="card-body">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <div class="progress">
            <span>Progress</span>
            <div class="progress-bar"></div>
            <span>${this.progress}%</span>
          </div>
        </div>
        <div class="card-footer">
          <ul>
            ${this.avatars.map(avatar => html`
              <li><img src="${avatar.src}" alt="${avatar.alt}" onerror="this.onerror=null;this.src='https://placehold.co/30x30/cccccc/ffffff?text=U';"></li>
            `)}
            <a href="#" class="btn-add">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:0.875rem; height:0.875rem;">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
            </a>
          </ul>
          <a href="#" class="btn-countdown">${this.countdownText}</a>
        </div>
      </div>
    `;
  }
}

customElements.define('project-card', ProjectCard);