import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardProduto from '../components/CardProduto'
import { produtos } from '../data/produtos'

const slides = [
  { titulo: 'Queima de stoque Nike 🔥', texto: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.', emoji: '👟' },
  { titulo: 'Novidades para o seu dia a dia', texto: 'Roupas e tênis com o conforto e o estilo que você procura.', emoji: '👕' },
  { titulo: 'Acessórios com preço justo', texto: 'Bonés, mochilas e muito mais para completar o seu look.', emoji: '🧢' },
  { titulo: 'Som de qualidade', texto: 'Headphones com as melhores ofertas da temporada.', emoji: '🎧' },
]

const colecoes = [
  { id: 1, titulo: 'Novo drop Supreme', emoji: '👕' },
  { id: 2, titulo: 'Coleção Adidas', emoji: '👟' },
  { id: 3, titulo: 'Novo Beats Bass', emoji: '🎧' },
]

const categorias = [
  { nome: 'Camisetas', emoji: '👕' },
  { nome: 'Calças', emoji: '👖' },
  { nome: 'Bonés', emoji: '🧢' },
  { nome: 'Headphones', emoji: '🎧' },
  { nome: 'Tênis', emoji: '👟' },
]

function Home() {
  const [slideAtual, setSlideAtual] = useState(0)
  const slide = slides[slideAtual]

  return (
    <>
      {/* Banner */}
      <section className="hero">
        <div className="hero-interno">
          <div className="hero-bloco">
            <p className="hero-sub">Melhores ofertas personalizadas</p>
            <h1>{slide.titulo}</h1>
            <p className="hero-texto">{slide.texto}</p>
            <Link to="/produtos" className="botao">Ver Ofertas</Link>
            <div className="pontos">
              {slides.map((s, i) => (
                <button
                  key={s.titulo}
                  type="button"
                  className={`ponto ${i === slideAtual ? 'ativo' : ''}`}
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => setSlideAtual(i)}
                />
              ))}
            </div>
          </div>
          <div className="hero-imagem">{slide.emoji}</div>
        </div>
      </section>

      {/* Coleções */}
      <section className="secao">
        <h2 className="secao-titulo">Coleções em destaque</h2>
        <div className="colecoes">
          {colecoes.map((c) => (
            <div key={c.id} className="colecao">
              <div>
                <span className="selo">30% OFF</span>
                <h3>{c.titulo}</h3>
                <Link to="/produtos" className="botao botao-claro">Comprar</Link>
              </div>
              <span className="colecao-imagem">{c.emoji}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="secao">
        <h2 className="secao-titulo">Categorias</h2>
        <div className="categorias">
          {categorias.map((c) => (
            <Link key={c.nome} to="/produtos" className="categoria">
              <span className="categoria-icone">{c.emoji}</span>
              {c.nome}
            </Link>
          ))}
        </div>
      </section>

      {/* Produtos em alta */}
      <section className="secao">
        <div className="secao-topo">
          <h2 className="secao-titulo">Produtos em alta</h2>
          <Link to="/produtos" className="ver-todos">Ver todos →</Link>
        </div>
        <div className="grade">
          {produtos.slice(0, 6).map((p) => (
            <CardProduto key={p.id} produto={p} />
          ))}
        </div>
      </section>

      {/* Oferta especial */}
      <section className="oferta">
        <div className="oferta-interno">
          <div className="oferta-imagem">👟</div>
          <div>
            <p className="oferta-rotulo">Oferta especial</p>
            <h2>Air Jordan edição de colecionador</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/produtos" className="botao">Ver Oferta</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home