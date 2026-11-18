import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div className="footer-marca">
          <Link to="/" className="logo logo-claro">
            <span className="logo-icone">&gt;_</span> Digital Store
          </Link>
          <p>
            Sua loja de tênis, roupas e acessórios, com as melhores marcas
            e preços justos.
          </p>
          <div className="redes">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Twitter">tw</a>
          </div>
        </div>

        <div>
          <h4>Informação</h4>
          <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>

        <div>
          <h4>Categorias</h4>
          <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
          </ul>
        </div>

        <div className="footer-contato">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <p className="footer-copy">&copy; 2022 Digital College</p>
    </footer>
  )
}

export default Footer