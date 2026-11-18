import { createContext, useContext } from 'react'

export const CarrinhoContext = createContext(null)

// Atalho para qualquer componente acessar o carrinho
export function useCarrinho() {
  return useContext(CarrinhoContext)
}