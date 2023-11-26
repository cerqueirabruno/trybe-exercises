/*

==========  ==========

  TYPESCRIPT
  PROPS
  RENDERIZAÇÃO CONDICIONAL
  RENDERIZAÇÃO DE LISTAS
  TIPAR PROPS


*/


/*

  TYPESCRIPT - TIPOS POR INFERÊNCIA
  - já sabe qual é o tipo dos valores que ele vai receber e, por isso, não é preciso informá-los;

  ========== tipos primtivos (string, number e boolean)  ==========
  export function getFirst(item: string) {
    return item.charAt(0);
  }

  ========== tipos array  ==========

  // 1
  export function sumAllNumbers(list: Array<number>) {
    return list.reduce((num, sum) => num + sum, 0);
  }

  // 2
  export function sumAllNumbers(list: number[]) {
    return list.reduce((num, sum) => num + sum, 0);
  }
  
  = declarar array
  let arrayOfStrings: string[];

  = declarar objeto
  let person: {name: string, age: number };

  ========== tipos custon  ==========


  ========== DEFINIR EXPLICITAMENTE O RETORNO A FUNÇÃO ==========
  function returnNumber(): number {
    // ...
  }

  ========== ? QUANDO A PROPRIEDADE NÃO É OBRIGATÓRIA ==========
    type User = {
    id: number,
    name: string,
    modules?: string[],
  }

  let myUser: User;





*/







///////////////////////////////////////////////////////////////////////////////////////


/* 

  tipar normal
  tipar array (2)
  tipar parametros de funcao
  tipar o retorno de uma funcao
  tipar um objeto
  type alias
  type checking - npx tscs


  PROP CHILDREN
  - 

*/