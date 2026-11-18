import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCarrinho } from '../context/CarrinhoContext'

const links = [
  { texto: 'Home', to: '/' },
  { texto: 'Produtos', to: '/produtos' },
  { texto: 'Categorias', to: null },
  { texto: 'Meus Pedidos', to: null },
]

// Mostra um NavLink quando o item tem página, ou um link provisório quando não tem
function ItemMenu({ link, aoClicar }) {
  return link.to ? (
    <NavLink to={link.to} end={link.to === '/'} onClick={aoClicar}>
      {link.texto}
    </NavLink>
  ) : (
    <a href="#" onClick={aoClicar}>{link.texto}</a>
  )
}

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [buscaAberta, setBuscaAberta] = useState(false)
  const quantidadeCarrinho = useCarrinho().quantidade

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className="header">
      <div className="header-topo">
        <Link to="/carrinho" className="icone-botao" aria-label={`Carrinho, ${quantidade} item(ns)`}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
    <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6" />
  </svg>
  {quantidade > 0 && <span className="badge">{quantidade}</span>}
</Link>

        <Link to="/" className="logo">
          <span className="logo-icone">&gt;_</span> Digital Store
        </Link>

        <div className="header-acoes">
          <a href="#" className="link-cadastro so-desktop">Cadastre-se</a>
          <button className="botao botao-pequeno so-desktop" type="button">Entrar</button>

          <button className="icone-botao botao-busca-mobile" type="button" aria-label="Pesquisar" onClick={() => setBuscaAberta(!buscaAberta)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" />
            </svg>
          </button>

          <button className="icone-botao" type="button" aria-label="Carrinho">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
              <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6" />
            </svg>
            <span className="badge">{quantidadeCarrinho}</span>
          </button>
        </div>

        <form className={`busca ${buscaAberta ? 'aberta' : ''}`} onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="Pesquisar produto..." aria-label="Pesquisar produto" />
        </form>
      </div>

      {/* Menu para computador */}
      <nav className="menu-desktop">
        {links.map((l) => <ItemMenu key={l.texto} link={l} />)}
      </nav>

      {/* Menu lateral para celular */}
      <div className={`overlay ${menuAberto ? 'visivel' : ''}`} onClick={fecharMenu} />
      <aside className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
        <p className="menu-titulo">Páginas</p>
        <nav>
          {links.map((l) => <ItemMenu key={l.texto} link={l} aoClicar={fecharMenu} />)}
        </nav>
        <div className="menu-rodape">
          <button className="botao botao-bloco" type="button">Entrar</button>
          <a href="#" className="link-cadastro">Cadastre-se</a>
        </div>
      </aside>
    </header>
  )
}

export default Header