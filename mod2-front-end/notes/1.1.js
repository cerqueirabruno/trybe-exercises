/*

  configuração de ambiente e javascript assíncrono
  react com typescript
  fundamentos
  hooks
  estado, props e ciclo de vida
  formulários
  react router
  context api
  metodologias ágeis
  testes automatizados com react testing library
  gerenciamento de estado global

*/


/*

  >>>>> AMBIENTE DE DESENVOLVIMENTO <<<<<

  iniciar um projeto com npm;
  configurar pastas;
  iniciar controle de versionamento com git;
  instalar bibliotecas externas;
  instalar um bundler e web server (vite);
  utilizar npm, npx e npm scripts;
  configurar eslint no projeto;
  utilizar css no seu projeto;

*/

/*

  >>>>> NPM <<<<<

  o que é NPM?
  - (Node Package Manager) é um gerenciador de pacotes para o Node.js. Ele é usado para instalar
  e gerenciar pacotes de dependências que você deseja usar em seu projeto.

  o que é NPX?
  - é uma ferramenta que vem com npm a partir da versão 5.2. Ele permite executar pacotes Node.js
  sem precisar instalá-los primeiro. Isso é útil para pacotes que você só quer usar uma vez ou testar.

  >>>>> COMANDOS NPM <<<<<

  npm init - y
  - cria um package.json com as configurações padrão;

  npm install nanoid
  - instala a biblioteca nanoid;

  node_modules
  - pasta onde ficam as bibliotecas instaladas;

  package.json
  - arquivo com as configurações do projeto;

  package-lock.json
  - arquivo com as configurações das bibliotecas instaladas;

  .gitignore
  - arquivo que define quais arquivos e pastas serão ignorados pelo git;

  import { nanoid } from 'nanoid'
  - importa a função nanoid da biblioteca nanoid;

  "type": "module"
  - define que o projeto utilizará módulos do ES6 (precisa ser adicionado no package.json);

*/

/* 

  >>>>> ORGANIZAÇÃO DE PASTAS <<<<<

  src
  - código fonte do projeto;

  dist ou build
  - código fonte compilado;

*/

/*

  >>>>> VITE <<<<<

  npm create vite@latest
  - cria um projeto com vite;

  npm create vite .
  - cria um projeto com vite na pasta atual;

  npm run dev
  - inicia o servidor de desenvolvimento;

  npm run build
  - compila o projeto;

*/

/*

  >>>>> ESLINT <<<<<

  npm init @eslint/config
  - cria um arquivo de configuração do eslint (.eslintrc.json);

  npx eslint ./src
  - executa o eslint no projeto;

  "lint": "eslint ./src"
  - adiciona um script para executar o eslint;

*/

/*

  >>>>> ESLINT TRYBE <<<<<

  npm install @trybe/eslint-config-frontend

  crie o arquivo .eslintrc.json com o seguinte conteúdo:
  
    {
      "extends": "@trybe/eslint-config-frontend"
    }

*/

/*

  >>>>> CSS <<<<<

  // src/main.js
  import "./style.css";

*/