function Nav({ setSeccion }) {
  return (
    <nav>
      <ul>
        <li><button className="btn" onClick={() => setSeccion("home")}>Home</button></li>
        <li><button className="btn" onClick={() => setSeccion("alojamiento")}>Alojamiento</button></li>
        <li><button className="btn" onClick={() => setSeccion("contacto")}>Contacto</button></li>
      </ul>
    </nav>
  )
}
export default Nav
