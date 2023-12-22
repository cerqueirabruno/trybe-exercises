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