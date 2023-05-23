
# Tarot Game



Este projeto de jogo de Tarot foi desenvolvido para qualquer pessoa interessada em explorar e desfrutar da experiência do Tarot online. Ele é voltado para entusiastas do Tarot, curiosos e jogadores que desejam se envolver com as cartas de forma interativa. A aplicação proporciona uma maneira divertida e envolvente de aprender sobre as diferentes cartas e seus significados, permitindo que os usuários experimentem o jogo de Tarot de maneira virtual. 


## Desafio

&#10004; Tela de apresentação exibindo todas as cartas com seu conteúdo visível, e com um botão para iniciar o jogo.

&#10004; Ao clicar no botão, as cartas deverão ser viradas - escondendo o conteúdo - e embaralhadas.

&#10004; Permitir que o usuário selecione apenas uma carta, clicando na mesma.

&#10004; Apresentar a carta selecionada, o nome da carta e uma descrição. (a descrição pode ser um lorem ipsum)
## Funcionalidades

- Cards interativos
- Preview em tempo real
- Design responsivo
- Multiplataforma


## Tecnologias Utilizadas

- HTMl5
- Javascript
- TailwindCSS
- React + ViteJS
## Rodando localmente:

Clone o projeto

```bash
  git clone: https://github.com/Rvferrao/TAROT-PROJECT/tree/main
```

Entre no diretório do projeto

```bash
  cd TAROT-GAME
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev: inicie dessa forma para modificações no projeto.
  npm run preview: inicie uma prévia do projeto.
```


## Rodando os testes

Para utilizar os testes primeiro instale a ferramente de testes Cypress:

```bash
 npm install cypress
```

Logo após instalar verifique se o projeto está rodando e abra a ferramenta:

```bash
 npx cypress open
```

o cypress será executado pelo navegador de sua escolha, na tela de escolha selecione a forma de teste E2E.

### Como funciona 


O primeiro teste verifica se o elemento h1 contém o texto correto. Ele localiza o elemento através do atributo data-test e verifica se o texto "TAROT GAME" está presente, clicando no elemento em seguida.

O segundo teste verifica se o botão principal está funcionando corretamente. Ele encontra o elemento do botão através do atributo data-test e o clica usando a opção force: true.

Em seguida, temos um bloco describe que agrupa outros testes relacionados aos cartões do jogo. Dentro desse bloco, temos um teste que verifica se apenas um cartão está aberto, clicando no botão principal e, em seguida, clicando em um ou mais cartões.

O próximo teste dentro do bloco verifica se os cliques nos cartões não os viram novamente, garantindo que os cartões não sejam abertos repetidamente.

Por fim, temos um teste que reinicia o jogo, clicando novamente no botão principal.

Esses testes permitem verificar se os elementos do aplicativo estão sendo exibidos corretamente, se as interações estão funcionando adequadamente e se o fluxo do jogo está sendo seguido corretamente. Eles ajudam a identificar problemas e garantir a qualidade do aplicativo.



## Aprendizados

- Integração de tecnologias: Aprendi como integrar JavaScript, HTML5, React, Vite.js, TailWindCSS e Cypress.

- Foco em UX: Pude destacar a importância da interatividade e experiência do usuário no design do jogo.

- Testes automatizados: A implementação de testes com Cypress ajudou a garantir a qualidade do projeto.
## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```


## Autor

[Ricardo Ferrão](https://github.com/Rvferrao)





