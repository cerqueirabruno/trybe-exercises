// curto circuito: refere-se a uma técnica de avaliação lógica de expressões que pode ser útil em alguns casos. No contexto de JavaScript, "curto-circuito" é uma maneira de avaliar expressões lógicas de forma eficiente.

// A avaliação de curto-circuito ocorre quando o resultado de uma expressão lógica pode ser determinado com base apenas na avaliação de uma parte da expressão, sem a necessidade de avaliar a outra parte. Isso é particularmente útil quando você está usando operadores lógicos como && (E lógico) e || (OU lógico).

const usuario = {
    nome: "João",
    idade: 25,
    isAdmin: true
};

// Usando curto-circuito para fornecer um valor padrão
const nomeDoUsuario = usuario.nome || "Nome Não Informado";
const idadeDoUsuario = usuario.idade || "Idade Não Informada";
const isAdmin = usuario.isAdmin || false;

console.log(nomeDoUsuario); // Se o nome estiver definido, será João; caso contrário, será "Nome Não Informado"
console.log(idadeDoUsuario); // Se a idade estiver definida, será 25; caso contrário, será "Idade Não Informada"
console.log(isAdmin); // Se isAdmin estiver definido, será true; caso contrário, será false

// ===============================================================================================================

// O operador ternário é uma construção condicional em JavaScript que permite escrever uma expressão condicional de forma mais concisa. Ele é frequentemente usado como uma alternativa mais compacta a uma estrutura if...else.

// const ternaryOperator = condição ? expressão_se_verdadeira : expressão_se_falsa;

const idade = 18;
const status = idade >= 18 ? 'Adulto' : 'Menor de idade';

console.log(status); // Se idade for maior ou igual a 18, será 'Adulto'; caso contrário, será 'Menor de idade'
