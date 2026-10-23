import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <nav>
          <p>Seguinos en nuestras redes:</p>
        <ul className="social-links">
          <li>
            <img src="/img/logos/instagram.png" alt="Instagram" />
          </li>
          <li>
            <img src="/img/logos/facebook.png" alt="Facebook" />
          </li>
          <li>
            <img src="/img/logos/tik-tok.png" alt="TikTok" />
          </li>
          <li>
            <img src="/img/logos/youtube.png" alt="YouTube" />
          </li>
        </ul>
      </nav>
      <p>Copyright Chino Feliz - 2026. Todos los derechos reservados.</p>
    </footer>
  )
}