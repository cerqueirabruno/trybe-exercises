/*

  inicializar e estruturar um projeto em react com typescript.
  definir jsx como maneira de escrever tags html em javascript.
  criar elementos jsx.
  criar componentes react.
  utilizar componentes react.

*/

/*

  >>>>> inicializar e estruturar um projeto em react com typescript <<<<<

  $ npm create vite@latest ou $ npm create vite .;
  package.json > scripts > dev: "vite --open";
  configuração de git;
  configurando o eslint;

*/

/*

  >>>>> COMPONENTES <<<<<

  componentes sempre começam com letra maiúscula;
  quando se quer utilizar JavaScript no JSX, é necessário envolver o bloco de código com {};
  tudo que não estiver envolvido por chaves é considerado código HTML;
  JSX só pode retornar um elemento por vez;
  <> </> é um fragmento, que permite retornar mais de um elemento por vez;
  quando o "return" tem mais de 1 linha, é necessário envolver o bloco de código com ();

*/

const meuNome = {
  nome: 'bruno',
  sobrenome: 'cerqueira',
}

function MeuComponente() {
  return (
    <>
      {/* código */}
      <p>{`Olá ${meuNome.nome}`}</p>
    </>
  );
}

export default MeuComponente;

/*

  >>>>> IMPORTAÇÃO / EXPORTAÇÃO DE COMPONENTES <<<<<

  "default exports"
  export default MeuComponente;
  import MeuComponente from './src/MeuComponente';

*/

/*

  >>>>> ESTRUTURA DE PROJETO <<<<<

  index.html
  src/main.tsx
  src/App.tsx
  public

*/

/*

  >>>>> JSX <<<<<

  Note também que, quando se quer utilizar JavaScript no JSX, é necessário envolver o bloco
  de código com {}, pois tudo que não estiver envolvido por chaves é considerado código HTML, enquanto
  tudo que está dentro é código JavaScript.

  Apesar de o JSX aumentar muito o poder do React, há uma limitação: não é qualquer tipo de código que
  você pode colocar dentro das chaves. É possível usar apenas expressões JavaScript. Por essa razão, pode-se,
  por exemplo, invocar uma função (que é uma expressão JavaScript), mas não a declarar dentro do JSX. Do mesmo
  modo, pode-se utilizar uma expressão ternária, mas não um if ... else.
  
  statements (declarações) vs. expressions (expressões)
  https://www.joshwcomeau.com/javascript/statements-vs-expressions/

*/