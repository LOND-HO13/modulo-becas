class Footer {
  constructor() {
      this.element = document.createElement("div");
      this.element.className = "footer";
      this.element.innerHTML = `
          <div class="footer-section">
              <div class="footer-title">Universidad del Valle</div>
              <p>Oficina de Bienestar Universitario, primer piso Bloque A, Seccional Palmira</p>
              <p>Lunes a viernes 8:00 a.m. a 12:30 p.m. y 2:00 a 5:30 p.m.</p>
          </div>
          <div class="footer-section footer-contact">
              <div>
                  <strong>Becas de alimentación:</strong><br>
                  <a href="mailto:bonosalimentacion.palmira@gmail.com">bonosalimentacion.palmira@gmail.com</a>
              </div>
              <div>
                  <strong>Bienestar universitario:</strong><br>
                  <a href="mailto:bienestar.palmira@correounivalle.edu.co">bienestar.palmira@correounivalle.edu.co</a>
              </div>
          </div>
      `;
  }

  render(containerId) {
      const container = document.getElementById(containerId);
      if (container) {
          container.appendChild(this.element);
      }
  }
}

const footer = new Footer();
footer.render("footer-container");
