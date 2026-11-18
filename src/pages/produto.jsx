import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CardProduto from '../components/CardProduto'
import { produtos, formatarPreco } from '../data/produtos'
import { useCarrinho } from '../context/CarrinhoContext'

const tamanhos = [39, 40, 41, 42, 43]
const cores = ['#6fd3e8', '#ff6b9d', '#e63946', '#3b4b8f'] // provisório: confirme no Figma
const fundosMiniaturas = ['#e9e4ff', '#fff3c4', '#ffd9e6', '#efe3d3', '#dbe7f5']

function Detalhe({ produto }) {
  const { adicionar } = useCarrinho()
  const [imagemAtual, setImagemAtual] = useState(0)
  const [tamanho, setTamanho] = useState(null)
  const [cor, setCor] = useState(null)
  const [aviso, setAviso] = useState('')

  // Ao abrir um produto, volta para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const total = fundosMiniaturas.length
  const anterior = () => setImagemAtual((imagemAtual - 1 + total) % total)
  const proxima = () => setImagemAtual((imagemAtual + 1) % total)

  const nota = 4.5
  const avaliacoes = 90

  // Relacionados: primeiro os da mesma categoria, depois completa com os outros
  const outros = produtos.filter((p) => p.id !== produto.id)
  const relacionados = [
    ...outros.filter((p) => p.categoria === produto.categoria),
    ...outros.filter((p) => p.categoria !== produto.categoria),
  ].slice(0, 4)

  function comprar() {
  if (!tamanho || !cor) {
    setAviso('Escolha um tamanho e uma cor antes de comprar.')
    return
  }
  adicionar(produto, tamanho, cor)
  setAviso('Produto adicionado ao carrinho!')
}

  return (
    <>
      <section className="secao">
        <nav className="breadcrumb" aria-label="Caminho">
          <Link to="/">Home</Link> /
          <Link to="/produtos">Produtos</Link> /
          <span>{produto.categoria}</span> /
          <span>{produto.nome}</span>
        </nav>

        <div className="detalhe">
          {/* Galeria */}
          <div className="galeria">
            <div className="galeria-principal" style={{ background: fundosMiniaturas[imagemAtual] }}>
              <button type="button" className="seta seta-esq" aria-label="Imagem anterior" onClick={anterior}>‹</button>
              <span className="galeria-emoji">👟</span>
              <button type="button" className="seta seta-dir" aria-label="Próxima imagem" onClick={proxima}>›</button>
            </div>

            <div className="miniaturas">
              {fundosMiniaturas.map((fundo, i) => (
                <button
                  key={fundo}
                  type="button"
                  className={`miniatura ${i === imagemAtual ? 'ativa' : ''}`}
                  style={{ background: fundo }}
                  aria-label={`Ver imagem ${i + 1}`}
                  onClick={() => setImagemAtual(i)}
                >
                  👟
                </button>
              ))}
            </div>
          </div>

          {/* Informações */}
          <div className="detalhe-info">
            <h1>{produto.nome}</h1>
            <p className="detalhe-ref">
              {produto.categoria} | {produto.marca} | {produto.estado}
            </p>

            <div className="avaliacao">
              <span className="estrelas" aria-label={`Nota ${nota} de 5`}>★★★★★</span>
              <span className="nota">{nota}</span>
              <span className="qtd-avaliacoes">({avaliacoes} avaliações)</span>
            </div>

            <p className="detalhe-preco">
              {produto.precoAntigo && (
                <span className="preco-antigo">{formatarPreco(produto.precoAntigo)}</span>
              )}
              <span className="preco-grande">{formatarPreco(produto.preco)}</span>
            </p>

            <p className="detalhe-descricao-titulo">Descrição do produto</p>
            <p className="detalhe-descricao">{produto.descricao}</p>

            <p className="opcao-titulo">Tamanho</p>
            <div className="opcoes">
              {tamanhos.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`tamanho ${tamanho === t ? 'ativo' : ''}`}
                  aria-pressed={tamanho === t}
                  onClick={() => setTamanho(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="opcao-titulo">Cor</p>
            <div className="opcoes">
              {cores.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`cor ${cor === c ? 'ativa' : ''}`}
                  style={{ background: c }}
                  aria-label={`Cor ${c}`}
                  aria-pressed={cor === c}
                  onClick={() => setCor(c)}
                />
              ))}
            </div>

            <button type="button" className="botao botao-amarelo" onClick={comprar}>
              Comprar
            </button>
            <p className="aviso" aria-live="polite">{aviso}</p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="secao-topo">
          <h2 className="secao-titulo">Produtos relacionados</h2>
          <Link to="/produtos" className="ver-todos">Ver todos →</Link>
        </div>
        <div className="grade">
          {relacionados.map((p) => (
            <CardProduto key={p.id} produto={p} />
          ))}
        </div>
      </section>
    </>
  )
}

function Produto() {
  const { id } = useParams()
  const produto = produtos.find((p) => p.id === Number(id))

  if (!produto) {
    return (
      <section className="secao">
        <h1>Produto não encontrado</h1>
        <Link to="/produtos">Voltar para a listagem</Link>
      </section>
    )
  }

  // O key faz o React recriar o Detalhe a cada produto novo,
  // zerando a galeria, o tamanho e a cor escolhidos
  return <Detalhe key={produto.id} produto={produto} />
}

export default Produto