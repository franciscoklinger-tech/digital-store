# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [# Digital Store

Loja virtual feita em React como projeto final do curso de Front-end
[nome do curso]. O visual segue o design do Figma da Digital Store.

## Funcionalidades

- Página inicial com banner, coleções, categorias e produtos em alta
- Listagem de produtos com filtros (marca, categoria, gênero e estado)
  e ordenação por preço
- Página do produto com galeria, escolha de tamanho e cor e produtos
  relacionados
- Carrinho de compras com alteração de quantidade, total e persistência
  no navegador
- Layout responsivo, pensado primeiro para celular

## Tecnologias

- React
- Vite
- React Router
- CSS puro

## Como rodar o projeto

Você precisa ter o [Node.js](https://nodejs.org) instalado (versão LTS).

1. Clone o repositório:
   git clone [https://github.com/franciscoklinger-tech/digital-store.git]
2. Entre na pasta do projeto:
   cd digital-store
3. Instale as dependências:
   npm install
4. Inicie o servidor de desenvolvimento:
   npm run dev
5. Abra o endereço que aparece no terminal (normalmente
   http://localhost:5173).

## Estrutura de pastas

src/
  components/  componentes reutilizáveis (Header, Footer, CardProduto)
  context/     estado global do carrinho
  data/        lista de produtos de exemplo
  pages/       Home, Produtos, Produto e Carrinho

## Link do projeto

[cole aqui o link do deploy]

## Autor

[franciscoklinger-tech] - [https://github.com/franciscoklinger-tech/digital-store.git]](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
