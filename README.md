<br />
<p align="center">
  <h3 align="center">RaroLabs React Test</h3>

  <p align="center">
    Teste Tecnico para RaroLabs
  </p>
</p>

## Sobre o Projeto

Esse teste tem como objetivo customizar um componente de Tags em ReactJs.
<br/><br/>

Dificuldades no teste:<br/>
Tive uma dificuldade em solucionar um bug de renderização. Ao clicar no botão "show emails", deve-se renderizar os emails validados no input, porém<br/>
quando eu insiro emails utilizando o ";" o input valida normalmente os emails, é adicionado na lista também, porém ele não renderiza esses emails na tela.<br/>
Só renderiza quando insiro emails normalmente sem o ";" ou quando aperto no botão "show emails" novamente ou apago um email.<br/>
Acredito ser um bug no .map na hora de renderizar os emails adicionados. Mas, por fim, nao consegui resolver esse bug :(
<br/><br/>

Segue o escopo:

Customização do componente de TagsInput.
os seguintes requisitos precisam ser implementados em seu novo componente:

1. somente tags com email válidos poderão ser aceitos pelo input.
2. ao digitar um e-mail válido e pressionar tab, o sistema deverá criar uma nova tag.
3. se o usuário inserir diversos emails válidos separados por ;, estes diversos e-mails deverão ser transformados em tags. Texto inválido será ignorado nesta modalidade.

no bloco abaixo, segue um teste de unidade implementado para este componente. Ele foi escrito utilizando as bibliotecas jest e @testing-library/react, que são comuns em projetos react. Para completar esta questão, você deve:

1. Fazer o primeiro teste, já implementado, passar
2. Escrever o conteúdo segundo teste, que está somente enunciado.
3. Escrever ao menos outros dois testes que contemplem os requisitos citados acima.


### Feito em

* [ReactJS]
* [Javacript]


## Getting Started

### Pre-requisitos

Instalar todas dependencias:
* yarn
  ```sh
  yarn install
  ```
  

### Uso

No diretório do projeto, execute:

```sh
  yarn start
  ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contato

Carlos Lopes - (https://twitter.com/tiko_lo) - carloslopessf@gmail.com

Project Link: [https://github.com/carlosdevv/gavanApp](https://github.com/carlosdevv/rarolabstest)

