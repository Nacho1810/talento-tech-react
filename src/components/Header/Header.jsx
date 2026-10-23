import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return <header className="site-header">
    <Link className="brand" to={"/"} aria-label="Chino Feliz, inicio">
      <img className="brand-logo" src="/img/logos/logo_chino_feliz.png" alt="" />
      <span>Chino Feliz</span>
    </Link>
    <Nav />
  </header>
}