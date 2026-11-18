import { Link } from 'react-router-dom'
import { formatarPreco } from '../data/produtos'

function CardProduto({ produto }) {
  // Calcula a porcentagem de desconto a partir dos dois preços
  const desconto = produto.precoAntigo
    ? Math.round((1 - produto.preco / produto.precoAntigo) * 100)
    : 0

  return (
    <Link to={`/produtos/${produto.id}`} className="card">
      <div className="card-imagem">
        {desconto > 0 && <span className="selo-desconto">{desconto}% OFF</span>}
        {/* Quando tiver a foto: <img src={produto.imagem} alt={produto.nome} /> */}
        <span>👟</span>
      </div>
      <p className="card-categoria">{produto.categoria}</p>
      <h3>{produto.nome}</h3>
      <p className="card-precos">
        {produto.precoAntigo && (
          <span className="preco-antigo">{formatarPreco(produto.precoAntigo)}</span>
        )}
        <span className="preco">{formatarPreco(produto.preco)}</span>
      </p>
    </Link>
  )
}

export default CardProduto