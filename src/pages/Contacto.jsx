function Contacto() {
  return (
    <main className="contacto">
      <h2>Contacto</h2>

      <section className="contacto-contenido">
        {/* Columna 1: Información */}
        <div className="columna">
          <address>
            Misiones 5357<br />
            Posadas, Misiones<br />
            <a
              href="https://wa.me/5493764738830?text=Hola!%20Estoy%20interesado%20en%20alquilar%20La%20Pausa%20en%20Posadas.%20¿Está%20disponible?"
              target='_blank'
              rel="noopener noreferrer"
              >+54 9 37 6473-8830
            </a><br />
            <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
          </address>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="columna">
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Mapa */}
      <section className="mapa">
        <h3>¿Dónde estamos?</h3>
        <iframe
          title="Ubicación en Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.5157747990553!2d-55.895808224577896!3d-27.39829327644003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457befdbae1b369%3A0xcc47f9491f70c62f!2sMisiones%205357%2C%20Posadas%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1718918213342!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
</section>

    </main>
  )
}

export default Contacto
