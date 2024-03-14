// 🚀 Exercício 1
// No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

// 🚀 Exercício 2
// Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.

// 🚀 Exercício 3
// Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

// 🚀 Exercício 4
// Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

// 🚀 Exercício 5
// No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.

// 🚀 Exercício 6
// Encerre o terminal.

// 🚀 Exercício 7
// Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

// 🚀 Exercício 8
// Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.

// 🚀 Exercício 9
// Retome o container que foi criado anteriormente neste exercício.

// 🚀 Exercício 10
// Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.

// 🚀 Exercício 11
// Encerre o terminal.

// 🚀 Exercício 12
// Remova somente o container criado para esse exercício.

// Exercício 13
// [BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.

// Exercício 14
// [BÔNUS] Encerre o container utilizando os botões [ctrl] + [c].

// 1. https://hub.docker.com/_/debian
// 2. docker pull debian
// 3. docker pull debian:stable-slim
// 4. docker container run -it debian:stable-slim
// 5. cat /etc/*-release
// 6. exit
// 7. id: b0d2d0df65b4
// 8. docker start b0d2d0df65b4 || NAMES
// 9. docker attach b0d2d0df65b4
// 10. cat /etc/debian_version
// 11. exit
// 12. docker container rm b0d2d0df65b4
// 13. docker run -it --rm andrius/ascii-patrol
// 14. CTRL + C