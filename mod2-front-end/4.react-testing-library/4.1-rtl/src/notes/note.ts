/*

cobertura dos casos de uso:
- são possibilidades de usos do sistema.

cobertura de código (code coverage) / cobertura de testes:
- é evidenciar quais linhas do código foram testadas e quais não estão sendo exploradas nos testes.

cobertura alta = bastante testado;
cobertura dos casos de uso = qualidade do código;

//////////

--coverage: 

- file	lista todos os arquivos da aplicação que devem ser testados.
- % stmts	abreviação de statements, exibe a porcentagem de declarações que estão sendo testadas.
- % branch	exibe a porcentagem coberta de diferentes caminhos por onde o código pode seguir.
- % funcs	exibe a porcentagem de funções cobertas por testes.
- % lines	exibe a porcentagem de linhas cobertas por testes.
- uncovered line #s	exibe quais as linhas do arquivo não estão sendo testadas. caso a porcentagem de linhas cobertas seja 100%, nada aparecerá aqui.

//////////

RTL: casos de uso (comportamento da aplicação sob a perspectiva da pessoa usuária.)

Jest: verificar se, por exemplo, as funções da aplicação de fato retornam aquilo que era esperado. São chamados de testes unitários.

testes de integração:
- verificar se um elemento criado está efetivamente sendo exibido na tela;

//////////

AMBIENTE DE CONFIGRAÇÃO

Vitest: é um framework de testes nativo do Vite, que utiliza a API do Jest;

//////////

$ npm test
$ npm run test

.test.tsx
.spec.tsx

//////////




*/