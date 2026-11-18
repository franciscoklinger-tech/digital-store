export const produtos = [
  { id: 1, nome: "K-Swiss V8 - Masculino", categoria: "Tênis", marca: "K-Swiss", genero: "Masculino", estado: "Novo", preco: 100, precoAntigo: 200, descricao: "Tênis leve e confortável, ideal para o dia a dia." },
  { id: 2, nome: "Nike Air Force Vermelho", categoria: "Tênis", marca: "Nike", genero: "Unissex", estado: "Novo", preco: 599.9, precoAntigo: 799.9, descricao: "Clássico com detalhes em vermelho e solado resistente." },
  { id: 3, nome: "Adidas Runner Feminino", categoria: "Tênis", marca: "Adidas", genero: "Feminino", estado: "Novo", preco: 349.9, precoAntigo: null, descricao: "Amortecimento extra para corridas e caminhadas." },
  { id: 4, nome: "Camiseta Supreme Preta", categoria: "Camisetas", marca: "Supreme", genero: "Masculino", estado: "Novo", preco: 189.9, precoAntigo: 269.9, descricao: "Algodão macio com estampa vermelha." },
  { id: 5, nome: "Boné Nike Urbano", categoria: "Bonés", marca: "Nike", genero: "Unissex", estado: "Novo", preco: 79.9, precoAntigo: null, descricao: "Boné ajustável com aba curva." },
  { id: 6, nome: "Calça Jogger Adidas", categoria: "Calças", marca: "Adidas", genero: "Masculino", estado: "Usado", preco: 129.9, precoAntigo: 199.9, descricao: "Confortável, com elástico no tornozelo." },
  { id: 7, nome: "Headphone Beats Bass", categoria: "Headphones", marca: "Beats", genero: "Unissex", estado: "Novo", preco: 899.9, precoAntigo: 1199.9, descricao: "Graves potentes e bateria de longa duração." },
  { id: 8, nome: "Air Jordan Colecionador", categoria: "Tênis", marca: "Nike", genero: "Masculino", estado: "Usado", preco: 1299.9, precoAntigo: null, descricao: "Edição de colecionador em ótimo estado." },
  { id: 9, nome: "Camiseta Puma Esportiva", categoria: "Camisetas", marca: "Puma", genero: "Feminino", estado: "Novo", preco: 99.9, precoAntigo: 139.9, descricao: "Tecido leve que seca rápido." },
  { id: 10, nome: "Tênis Puma Casual", categoria: "Tênis", marca: "Puma", genero: "Feminino", estado: "Novo", preco: 279.9, precoAntigo: null, descricao: "Visual casual para combinar com tudo." }
]

// Transforma 299.9 em "R$ 299,90"
export function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}