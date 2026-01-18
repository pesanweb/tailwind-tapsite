import { LitElement, html, css } from 'lit';

export class TestimonialSection extends LitElement {
  static styles = css`
    .testimonial-container {
      padding: 2rem;
      background: var(--ddd-theme-default-linkLight);
    }
    .testimonial-card {
      background: white;
      padding: 1rem;
      margin: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `;

  render() {
    return html`
      <section class="testimonial-container">
        <h2>Testimonial Pelanggan</h2>
        <div class="testimonial-card">
          <h3>Ani Suryani</h3>
          <p>"Program diet ini sangat membantu saya mencapai berat badan ideal!"</p>
        </div>
        <div class="testimonial-card">
          <h3>Budi Santoso</h3>
          <p>"Menunya bervariasi dan tetap enak, tidak merasa tersiksa diet."</p>
        </div>
      </section>
    `;
  }
}

customElements.define('testimonial-section', TestimonialSection);