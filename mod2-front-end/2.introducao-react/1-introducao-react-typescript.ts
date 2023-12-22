/* 

inicializar e estruturar um projeto em react com typescript.
definir jsx como maneira de escrever tags html em javascript.
criar elementos jsx.
criar componentes react.
utilizar componentes react.

*/

/* 

========== criando um projeto react com typescript ==========

npm create vite@latest
@ project-name
@ typescript / typescript SWC
@ react

npm i
npm run dev

package.json > scripts > dev > "vite --open"

*/

/* 

========== estrutura de pastas ==========

index.html
- ponto de entrada da aplicação

src/main.tsx
- é o responsável por renderizar e atualizar os elementos react

src/App.tsx
- é o primeiro componente React e corresponde à sua aplicação propriamente dita
- além disso, todos os componentes da aplicação deverão ser chamados pelo App ou por seus componentes-filhos

public
- esse diretório conterá os arquivos estáticos e públicos
- http://localhost:5173/vite.svg

src/assets
- são colocados outros arquivos estáticos necessários para a sua aplicação, como imagens, fontes e vídeos
- como os arquivos que estão aqui não são públicos, você precisará importá-los nos componentes que forem os utilizar

vite.config.ts
- configurações específicas do Vite

tsconfig.json
- configurações necessárias para que seja possível utilizar typeScript em sua aplicação

tsconfig.node.json
- configurações necessárias para que a aplicação TypeScript também consiga ser executada no ambiente de desenvolvimento, nesse caso usando node.

vite-env.d.ts
- esse arquivo tem um triple slash que aplica algumas configurações e alguns tipos do próprio vite no TypeScript, a fim de que não seja necessário realizar configurações extras

*/

/* 

========== configurando o projeto ==========

configurando o git
$ git init
$ git add .
$ git commit -m "initial commit"
$ git remote add origin <endereço-do-seu-projeto>
$ git push -u origin master

========== configurando o eslint ==========
$ rm .eslintrc.cjs
$ npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
$ npm i @trybe/eslint-config-frontend -D

// .eslintrc.json

{
  "extends": "@trybe/frontend"
}

// package.json

...
  "scripts": {
    ...
    "lint": "eslint -c .eslintrc.json . --ext .js,.jsx,.ts,.tsx"
    ...
  },
...

// .vscode/settings.json

{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
  },
  "extensions.ignoreRecommendations": false,
}

$ npm run lint

*/

/* 

========== CRIANDO UM COMPONENTE ==========
- são blocos de código que têm a própria lógica e estilização, podendo conter html, css e javascript

>>> DEFININDO UM COMPONENTE REACT

// src/Header.tsx

function Header() {
  return (
    <h1>Olá mundo!</h1>
  );
}

>>> JSX
- possivel utilizar variáveis e expressões javascript dentro do JSX
- { } = expressão javascript (não pode declarações javascript)

>>> JSX DEVE RETORNAR UM ÚNICO ELEMENTO-RAIZ
- <div> ... </div> = elemento-raiz
- <> ... </> = fragmento

>>> IMPORTANDO E UTLIZANDO UM COMPONENTES

export default Header; // exporta o componente

import Header from './Header'; // importa o componente

<Header /> // renderiza o componente

>>> REUTILIZANDO O COMPONENTE


>>> MANIPULANDO DOM NO REACT


*/