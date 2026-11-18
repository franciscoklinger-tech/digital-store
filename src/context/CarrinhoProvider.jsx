import { useState, useEffect } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

// Lê o carrinho salvo no navegador (ou começa vazio)
function lerSalvo() {
  try {
    const texto = localStorage.getItem('carrinho')
    return texto ? JSON.parse(texto) : []
  } catch {
    return []
  }
}

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(lerSalvo)

  // Toda vez que o carrinho muda, salva no navegador
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens))
  }, [itens])

  function adicionar(produto, tamanho, cor) {
    // O mesmo tênis em outro tamanho ou cor é um item diferente
    const chave = `${produto.id}-${tamanho}-${cor}`

    setItens((atual) => {
      const existente = atual.find((i) => i.chave === chave)

      if (existente) {
        return atual.map((i) =>
          i.chave === chave ? { ...i, quantidade: i.quantidade + 1 } : i
        )
      }

      return [
        ...atual,
        {
          chave,
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          tamanho,
          cor,
          quantidade: 1,
        },
      ]
    })
  }

  // delta é +1 ou -1; se a quantidade chegar a 0, o item sai do carrinho
  function alterarQuantidade(chave, delta) {
    setItens((atual) =>
      atual
        .map((i) => (i.chave === chave ? { ...i, quantidade: i.quantidade + delta } : i))
        .filter((i) => i.quantidade > 0)
    )
  }

  function remover(chave) {
    setItens((atual) => atual.filter((i) => i.chave !== chave))
  }

  function limpar() {
    setItens([])
  }

  const quantidade = itens.reduce((soma, i) => soma + i.quantidade, 0)
  const total = itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0)

  return (
    <CarrinhoContext.Provider
      value={{ itens, quantidade, total, adicionar, alterarQuantidade, remover, limpar }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}
