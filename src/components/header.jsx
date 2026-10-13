
import "../css_components/header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <div className = "logo" >
          <img src={logo} alt="Logo de iphoneapple" />

        <h1>iPhones Apple</h1>
        </div>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contactos</Link>
        </nav>
    </header>
    )
}

export default Header;