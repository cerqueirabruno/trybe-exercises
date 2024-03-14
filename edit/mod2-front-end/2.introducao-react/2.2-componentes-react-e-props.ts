/* 


fazer uso de props corretamente.
tipar as props com typescript.
utilizar renderização condicional para renderizar diferentes elementos ou componentes.


*/

/* 

========== TIPOS POR INFERÊNCIA ==========

Trata-se de quando o TypeScript já sabe qual é o tipo dos valores que ele vai receber e, por isso, não é preciso informá-los. 

========== TIPOS POR DEFINIÇÃO ==========

// tipagem de parâmetros

export function getFirst(item: string) {}

export function getFirst(item: Array<number>) {} // não é recomendado

export function getFirst(item: number[]) {} 

// tipagem de retorno

function sum(param1: number, param2: number) {}

function returnNumber(): number {}

// função que não tem nenhum retorno

function noReturn(): void {}

// lista e objetos
let arrayOfStringsOrNumbers: (string | number)[]; // armazenará uma lista de strings E/OU numbers
let arrayOfObjects: object[]; // armazenará uma lista de objetos
let person: {name: string, age: number }; // objeto

>>> CRIANDO OS PRÓPRIOS TIPOS

type User = {
  id: number,
  name: string,
  modules?: string[], // o ponto de interrogação indica que o atributo é opcional
}

let myUser: User;

*/

/* 

Verificação de tipos pelo TypeScript - type-checking

npx tsc
*/

/* 

========== PROPS ==========

- assemelham-se aos atributos dos elementos HTML, com a diferença de que não é preciso mais
passar apenas strings, sendo possível passar qualquer valor JavaScript, como arrays, objetos, 
funções, booleanos e números.

- As props servem para a comunicação entre os componentes: componentes-pai podem passar
informações para os componentes-filho por meio delas.






*/

/*

========== PROPS ==========

as props, em sua forma, assemelham-se aos atributos dos elementos html, com a diferença de que não é preciso mais passar apenas strings, sendo possível passar qualquer valor javascript, como arrays, objetos, funções, booleanos e números.

as props servem para a comunicação entre os componentes: componentes-pai podem passar informações para os componentes-filho por meio delas.

*/





/* 

>>>>> PASSANDO PROPS PARA O COMPONENTE-FILHO <<<<<

function App() {
  return (
    <>
      <Greeting person={ { firstName: "Chapolin", lastName: "Colorado" } } />
      <LuckyNumbers />
    </>
  );
}

*/





/* 

>>>>> ATRIBUINDO TIPOS À PROP DO COMPONENTE <<<<<

type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

function Greeting(props: GreetingProps) {}

*/





/*

========== RENDERIZAÇÃO CONDICIONAL (OPERADOR TERNÁRIO / CURTO CIRCUITO) ==========

>>>>> operador and (&& ) (curto circuito) <<<<<
>>>>> operador ternário (cond ? <A /> : <B />) <<<<<
>>>>> if else

*/




/*

========== RENDERIZAR LISTAS ==========

      {
        results.map((result) => (
          <article>
            <h3>Ano: {result.year}</h3>
            <h4>Prêmio: {result.prize}</h4>
          </article>
        ))
      }

*/







/*

========== PROP CHILDREN ==========

resumo: prop children em react

ao criar componentes em react, é comum passar informações por meio de props. no entanto, existe uma prop especial chamada children que permite encapsular conteúdo dentro de um componente de forma semelhante ao html. em vez de passar valores diretamente para props específicas, como no exemplo de um botão, você pode envolver o conteúdo desejado com o próprio componente.

// exemplo:

type ButtonProps = {
  children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return (
    <button>
      { children }
    </button>
  )
}

// uso do componente:

<Button>Clique aqui!</Button>

// neste exemplo, o componente button recebe a prop children, que pode conter qualquer conteúdo jsx. o tipo react.reactnode é utilizado para definir o que a prop children pode receber. isso proporciona uma forma mais intuitiva e semelhante ao html de usar o componente, envolvendo o conteúdo desejado entre as tags do componente.

*/