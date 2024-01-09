// ========== ESTADOS E EVENTOS ========== //

// capturar eventos utilizando a sintaxe do react;
// criar e utilizar event handlers;
// ler o estado de um componente e usá-lo para alterar o que exibimos no browser;
// inicializar um componente, dando a ele um estado predefinido;
// atualizar o estado de um componente.

// event handler: funções para serem executadas através de eventos na aplicação.
// estados: é um conjunto de dados armazenados que devem refletir, de alguma forma, na interface da aplicação.
// hooks: são funções que permitem que você utilize recursos do react em componentes funcionais.

// ========== HOOKS ========== //

// -> podem receber argumentos (não é obrigatório).
// -> podem retornar valores.
// -> sempre deve estar no topo do componente.
// -> sempre deve começar com use. (useStatte, useEffect, use...)
// -> não pode usar em componentes de classe.

// ========== CRIANDO ESTATO EM UM COMPONENTE ========== //

/*

import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;

*/

// ========== CARROSSEL ========== //

// ========== ATUALIZANDO LISTAS E OBJETOS ARMAZENADOS EM ESTADOS ========== //
