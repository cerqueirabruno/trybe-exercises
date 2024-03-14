/* 

renderizar listas (sem repetir código, usando map)
prop children
estilizar componentes
imagens componentes 

*/





/*

// ESTILIZAÇÃO

-> css normal: adicionando o atributo className e criando um arquivo css
-> estilização inline HTML:
-> estilização inline JSX: props + React.CSSProperties
-> sass:
-> bootstrap:
-> tailwind:

*/





/*

// EXPORTAÇÃO E IMPORTAÇÃO DE RECURSOS

-> OBS.:
- pode se utilizar qualquer nome na importação.
- exclusivo de componente react.

-> DEFAULT EXPORT (EXPORTAÇÃO) 1
export default MyComponent;

-> DEFAULT EXPORT (IMPORTAÇÃO) 1
import MyComponent from '../components/MyComponent'

-> DEFAULT EXPORT (EXPORTAÇÃO) 2

const data = [];

export default data;

--->

-> OBS.: 
- a importação deverá ter o mesmo nome.
- utilizado quando se tem amis de um recurso a ser exportado.

-> NAMED EXPORT (EXPORTAÇÃO)
export function sum(num1: number, num2: number) {
  return num1 + num2;
}

export function multiply(num1: number, num2: number) {
  return num1 * num2
}

-> NAMED EXPORT IMPORTAÇÃO
import { sum, multiply } from './utils/functions';

--->

-> IMPORTANDO O MÓDULO COMPLETO (EXPORTAÇÃO)
import * as mathFunctions from './utils/functions';

-> OBS.:
- mathFunctions é um nome que criado como exemplo para esse objeto. você poderia escolher qualquer outro nome para representá-lo

*/





/*

// IMAGENS NO REACT

-> OBS.:
- não é preciso informar o caminho completo do arquivo
- o nome pode ser qualquer um

-> IMPORTAÇÃO NO DIRETÓRIO 'PUBLIC'
import myImage from '/myImage.png';

-> USO
<img src={ myImage } />


-> IMPORTANDO DE OUTROS DIRETÓRIOS (IMPORTAÇÃO)
import myImage from './assets/myImage.jpg'

-> USO
<img src={ myImage } />

*/





/*

// ========== EVENT HANDLER / MANIPULADORES DE EVENTOS

-> DEFINIÇÃO:
- ações dentro de um sistema.
- geralmente causados por interações entre a pessoa e a aplicação.

-> JS: eventlistener
-> REACT: event handler

-> FORMAS DE ADICIONAR UM EVENTO A UM ELEMENTO
- inline HTML: <button onClick={ () => alert('Meu primeiro event handler com React') }>Clique em mim!</button>
- event handle via props: <button onClick={ handleClick }>Clique em mim!</button>
- 

*/