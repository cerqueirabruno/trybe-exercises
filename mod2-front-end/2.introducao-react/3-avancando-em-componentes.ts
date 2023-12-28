/*

utilizar o map para renderizar listas.
utilizar props children.
estilizar componentes.
utilizar imagens nos componentes.

*/

// ========== ESTILIZANDO UM COMPONENTE REACT ========== //

/* 

className: atributo que recebe uma string com o nome da classe CSS que você deseja aplicar ao elemento.
criar um arquivo CSS para cada componente.
estilização inline: passar um objeto com as propriedades CSS e seus respectivos valores para a prop style do elemento.
reactNode: valor esperado do style

*/

// ========== EXPORTANDO E IMPORTANDO ========== //

/* 

>>>>> default export

export default MyComponent;
import MyComponent from '../components/MyComponent'

// na importação, seja utilizado qualquer nome para o módulo importado.
// geralmente, é utilizado named exports quando o arquivo tem mais de um recurso a ser exportado.


>>>>> named export

export function sum(num1: number, num2: number) {
  return num1 + num2;
}

export function multiply(num1: number, num2: number) {
  return num1 * num2
}

import { sum, multiply } from './utils/functions';

// atribui-se um nome que deverá ser utilizado também na importação.


>>>>> importando todos os recursos de um módulo

import * as mathFunctions from './utils/functions';

*/


// ========== IMAGENS ========== //

