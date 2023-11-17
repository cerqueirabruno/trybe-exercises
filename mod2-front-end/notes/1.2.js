/*

  ========== JAVASCRIPT ASSINCRONO ==========

  código sincrono
  - executa uma instrução após a outra;

  código assincrono
  - executa uma instrução após a outra, mas não espera a instrução anterior terminar
  para executar a próxima;

  uso do código assincrono
  - leitura e escrita de arquivos;
  - acesso a alguns recursos do navegador;
  - requisições de rede;

*/

/*

  ========== PROMISE ==========

  promise é um objeto usado para processamento assíncrono. um promise (de “promessa”) representa um valor que pode estar
  disponível agora, no futuro ou nunca.

  uma promise pode ter três estados:
  
  - pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término
  da execução do código assíncrono;
  
  - fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. também é
  comum dizer que quando a promise está nesse estado ela está resolvida;
  
  - rejected (rejeitada): quando a operação assíncrona termina com algum erro.

*/

new Promise((resolve, reject) => {
  // código
});

// resolve: função que será chamada quando a promise for resolvida;
// reject: função que será chamada quando a promise for rejeitada;

/*

  .then(response)
  - é executado quando a promise é resolvida;

  .catch(error)
  - é executado quando a promise é rejeitada;

  .finally()
  - é executado sempre que a promise é resolvida ou rejeitada;

  .json()
  - transforma a resposta recebida da api em um objeto no formato json (útil para apis que
  retornam objetos) e o método .text(), que transforma a resposta recebida da api em texto puro.

  ========== OUTROS ==========

  endpoint
  - é o endereço da api que queremos acessar;

  token
  - é uma credencial de acesso que algumas apis exigem para que possamos acessá-las;

  ========== VÁRIAS PROMISES ==========

  parâmetro: array de promises;

  >>> PROMISE.ALL
  - retorno: quando todas são resolvidas: retorna promise resolvida, array com resultado;
  - retorno: quando 1 é rejeitada: retorna promise rejeitada, objeto de erro da promise que foi rejeitada;

  obs.: mesmo que uma das promises seja rejeitada, os códigos das outras ainda serão executados;
  
  >>> PROMISE.RACE
  - retorno: resultado da primeira promise que for resolvida;

  obs: mesmo que promise.race só receba o valor da primeira promise a ser finalizada e ignore o valor das outras promises,
  todas as promises passadas como parâmetro serão executadas.

  >>> PROMISE.ANY
  - retorno: retorna a primeira promise que for resolvida com sucesso ou se todas for rejeitada, retorna uma promise rejeitada com o objeto contendo todos os erros retornados pelas promises originais.

  >>> PROMISE.ALLSETTLED
  - retorno: uma única promise que é resolvida quando todas as promises passadas forem finalizadas. A promise é retornada com um array
  de objetos que contém o valor retornado por cada uma das promises originais.

*/

/*

  ========== FETCH ==========

  - é uma api do javascript que serve para fazermos requisições http. ela é bem mais
  simples de usar do que o objeto xmlhttprequest;

  >>> SINTAXE
  fetch(URL, config)

  - url: endereço para onde a requisição será feita;
  - config: objeto com as configurações da requisição;

*/