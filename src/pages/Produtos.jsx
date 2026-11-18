import { useState } from 'react'
import CardProduto from '../components/CardProduto'
import { produtos } from '../data/produtos'
import { useCarrinho } from '../context/CarrinhoContext'

// Lista os valores de um campo sem repetir (ex.: todas as marcas)
const valoresUnicos = (campo) => [...new Set(produtos.map((p) => p[campo]))]

const opcoes = {
  marca: valoresUnicos('marca'),
  categoria: valoresUnicos('categoria'),
  genero: valoresUnicos('genero'),
  estado: valoresUnicos('estado'),
}

const titulos = { marca: 'Marca', categoria: 'Categoria', genero: 'Gênero', estado: 'Estado' }

function Produtos() {
  const { adicionar } = useCarrinho()
  const [selecionados, setSelecionados] = useState({
    marca: [], categoria: [], genero: [], estado: [],
  })
  const [ordem, setOrdem] = useState('relevantes')
  const [filtrosAbertos, setFiltrosAbertos] = useState(false)

  // Marca ou desmarca uma opção de um filtro
  function alternar(campo, valor) {
    setSelecionados((atual) => {
      const lista = atual[campo]
      const novaLista = lista.includes(valor)
        ? lista.filter((v) => v !== valor)
        : [...lista, valor]
      return { ...atual, [campo]: novaLista }
    })
  }

  function limpar() {
    setSelecionados({ marca: [], categoria: [], genero: [], estado: [] })
  }

  // Um produto passa se, em cada filtro, nada foi marcado ou o valor dele foi marcado
  const filtrados = produtos.filter((p) =>
    Object.keys(selecionados).every(
      (campo) => selecionados[campo].length === 0 || selecionados[campo].includes(p[campo])
    )
  )

  // sort() muda a lista, então ordenamos uma cópia
  const ordenados = [...filtrados].sort((a, b) => {
    if (ordem === 'menor') return a.preco - b.preco
    if (ordem === 'maior') return b.preco - a.preco
    return 0
  })

  const totalMarcados = Object.values(selecionados).flat().length

  return (
    <section className="secao">
      <div className="listagem-topo">
        <div>
          <h1>Todos os produtos</h1>
          <p className="contagem">{ordenados.length} produto(s) encontrado(s)</p>
        </div>

        <div className="listagem-controles">
          <button
            type="button"
            className="botao-filtrar"
            onClick={() => setFiltrosAbertos(!filtrosAbertos)}
          >
            Filtrar{totalMarcados > 0 ? ` (${totalMarcados})` : ''}
          </button>

          <label className="ordenar">
            Ordenar por
            <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
              <option value="relevantes">Mais relevantes</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </label>
        </div>
      </div>

      <div className="listagem">
        <aside className={`filtros-lateral ${filtrosAbertos ? 'aberto' : ''}`}>
          <h2>Filtrar por</h2>

          {Object.keys(opcoes).map((campo) => (
            <fieldset key={campo} className="filtro-grupo">
              <legend>{titulos[campo]}</legend>
              {opcoes[campo].map((valor) => (
                <label key={valor} className="filtro-opcao">
                  <input
                    type="checkbox"
                    checked={selecionados[campo].includes(valor)}
                    onChange={() => alternar(campo, valor)}
                  />
                  {valor}
                </label>
              ))}
            </fieldset>
          ))}

          {totalMarcados > 0 && (
            <button type="button" className="limpar" onClick={limpar}>
              Limpar filtros
            </button>
          )}
        </aside>

        <div>
          {ordenados.length > 0 ? (
            <div className="grade">
              {ordenados.map((p) => (
                <CardProduto key={p.id} produto={p} />
              ))}
            </div>
          ) : (
            <p>Nenhum produto encontrado com esses filtros.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Produtos