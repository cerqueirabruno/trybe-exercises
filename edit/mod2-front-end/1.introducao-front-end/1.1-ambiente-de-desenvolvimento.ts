/* 

  ==================== CONFIGURAÇÃO DE AMBIENTE (NPM OU VITE) ====================

  INICIANDO UM PROJETO COM 'NPM' (O VITE JA CRIA UM PROJETO COM AS CONFIGURAÇÕES ABAIXO);


  - index.html
  - npm init -y
  - configuração de pastas
    - src (código fonte)
    - dist (código compilado)
  - <script type="module" src="./src/main.js"></script>

  configurando o GIT
  - git init
  - git add .
  - git commit -m "initial commit"
  - gitignoreW

  instalando bibliotecas externas
  - npm install nanoid
  - import { nanoid } from 'nanoid'

  package.json
  - "type": "module"

  bundle e web server
  - npm install vite (bundler e web server)
  - npm run dev (inicia o servidor de desenvolvimento
  - npm run build (compila o projeto)

  - npm create vite@latest
  - npm create vite .
  

*/

/*

  NPM 

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

  ====================

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

  <script type="module" src="./src/main.js"></script>
  - script que importa módulos do ES6;

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