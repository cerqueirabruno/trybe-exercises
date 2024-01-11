/*

passo 1: criar projeto com vite

passo 2: instalar bibliotecas
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest

passo 3: criar arquivo na raiz do projeto "setupTests.ts" com o conteúdo:
import '@testing-library/jest-dom';

passo 4: alterar o arquivo "src/vite-env.d.ts"
/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />

passo 5: no arquivo vite.config.ts, adicione uma nova chave ao objeto que está sendo exportado:
plugins: [react()], // apartir da linha abaixo;
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './setupTests.ts',
  css: true,
  reporters: ['verbose'],
  coverage: {
    reporter: ['text', 'json', 'html'],
    provider: 'v8'
  }
},

passo 6: adicione no topo do mesmo arquivo
/// <reference types="vitest" />

passo 7: package.json > scripts > adicione

"test": "vitest",
"coverage": "vitest run --coverage"

*/