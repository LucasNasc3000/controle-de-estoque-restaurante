# Sistema de controle de estoque
Esta é uma API desenvolvida para o controle de estoque de um restaurante. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas e validações de dados.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos<br>
2 - Fornecer uma lista contendo todos os insumos <br>
3 - Pesquisar por um ou mais insumos de acordo com seus dados<br>
4 - Atualizar um ou mais dados relativos aos insumos<br>
5 - Determinar uma quantidade mínima de insumos no estoque (opcional)<br>
6 - Registrar todas as operações que os usuários realizarem por meio de uma chave estrangeira<br>

### Funcionalidades das Saídas

1 - Registrar os dados relativos aos insumos que saíram<br>
2 - Listar todas as saídas<br>
3 - Pesquisar pelas saídas dos insumos de acordo com seus dados<br>
4 - Enivar emails aos destinatários autorizados caso algum insumo esteja próximo à quantidade limite ou caso chegue a mesma<br>
5 - Resgistrar as atividades dos funcionários por meio de chaves estrangeiras.<br>
6 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas. Por exemplo, se sair 1kg de arroz, as linhas responsáveis pelo peso total e quantidade na tabela dos insumos serão alteradas<br>

### Funcionalidades dos Funcionários

1 - Listar funcionários<br>
2 - Criar novos funcionários<br>
3 - Atualizar os dados dos funcionários<br>
4 - Deletar funcionários<br>
5 - Pesquisar funcionários de acordo com seus dados<br>
6 - Registrar em uma tabela os logs dos funcionários (data e hora do login, email e chave estrangeira)<br>
7 - Gerar JWT para o login de todos os funcionários, independentemente do nível de acesso<br>

### Funcionalidades das Vendas

1 - Registrar vendas<br>
2 - Listar as vendas<br>
3 - Atualizar dados das vendas<br>
4 - Pesquisar por vendas de acordo com seus dados<br>

### Acessos

Nesta aplicação existem diferentes acessos para cada funcionalidade e estes são concedidos por meio da verificação de dados específicos enviados pelo cabeçalho da requisição, como id, permissão e a senha de administrador, caso o funcionário tenha este acesso, além do JWT, exigido para todos os funcionários.<br>Os acessos são:<br>
- Acesso total: acesso à todas as funcionalidades da API. Este é o único tipo de acesso com o qual é possível utilizar as funcionalidades dos funcionários <br>
#### Acessos únicos <br>
- Insumos: permite ao funcionário utilizar todas as funcionalidades dos insumos
- Saídas: permite ao funcionário utilizar todas as funcionalidades das saídas
- Vendas: permite ao funcionário utilizar todas as funcionalidades das vendas <br>
#### Acessos mistos <br>
- Insumos e saídas: funcionalidades dos insumos e das saídas disponíveis
- Saídas e vendas: funcionalidades das saídas e das vendas disponíveis
- Insumos, saídas e vendas: funcionalidades dos insumos, das saídas e das vendas disponíveis

## Status
Finalizado ✔️<br>
Obs: atualizações serão feitas conforme as necessidades do front-end. Algumas funcionalidades adicionais já foram definidas mas serão implementadas somente quando
o front-end estiver em desenvolvimento.

## Principais Tecnologias Utilizadas
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg" hight=50px width=50px />

## Documentação e uso
### Quem desejar acessar a documentação em swagger, caso tenha instalado em sua máquina o Nodejs --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- Na raiz do projeto --><br>
- `npm install` ou `npm i`<br>
- `npm run dev`<br>
- Acessar no seu navegador a url `localhost:3000/doc`

### Para usar a api, caso você tenha docker na sua máquina --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- Entrar em `dist/database` e rodar `docker build -t mydb:database .`<br>
- Rodar em dist/database `docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=controleestoque -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword mydb:database`<br>
- Alterar a variável de ambiente `DATABASE_HOST` no dockerfile na raiz do proejeto para localhost ou o ip da sua máquina<br>
- Na raiz do projeto rodar `docker build -t nodeapp:app .`
- Rodar o comando `docker images` e copiar o id da imagem nodeapp:app
- `docker run -p 3000:3000 <id_nodeapp>`
