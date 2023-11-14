/* >>>>> Introdução - JavaScript assíncrono <<<<< */

/*

  código sincrono
  - executa uma instrução após a outra;

  código assincrono
  - executa uma instrução após a outra, mas não espera a instrução anterior terminar
  para executar a próxima;

  uso do código assincrono
  - Leitura e escrita de arquivos
  - Acesso a alguns recursos do navegador
  - Requisições de rede

*/

/*

  >>>>> PROMISE <<<<<

  Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”)
  representa um valor que pode estar disponível agora, no futuro ou nunca.

  Uma promise pode ter três estados:
  
  - pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término
    da execução do código assíncrono;
  
    - fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é
    comum dizer que quando a promise está nesse estado ela está resolvida;
  
    - rejected (rejeitada): quando a operação assíncrona termina com algum erro.

*/