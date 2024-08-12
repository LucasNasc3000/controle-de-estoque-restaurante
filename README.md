# Sistema de controle de estoque
Esta é uma API desenvolvida para o controle de estoque de um restaurante fictício. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas e validações de dados.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos  <strong>/inputs</strong> - <strong>POST</strong> <br>
2 - Fornecer uma lista contendo todos os insumos  <strong>/inputs</strong> - <strong>GET</strong> <br>
3 - Pesquisar por um ou mais insumos de acordo com seus dados <strong>/inputs/search/weightperunit/2</strong> -   
    <strong>GET</strong> <br>
4 - Atualizar um ou mais dados relativos aos insumos <strong>/inputs/id</strong> <strong>PUT</strong> <br>
5 - Determinar uma quantidade mínima de insumos no estoque (opcional)
6 - Registrar todas as operações que os usuários realizarem por meio de uma chave estrangeira

<img src="">

### Funcionalidades das Saídas

1 - Registrar os dados relativos aos insumos que saíram <strong>/outputs</strong> - <strong>POST</strong> <br>
2 - Listar todas as saídas <strong>/outputs</strong> - <strong>GET</strong> <br>
3 - Pesquisar pelas saídas dos insumos de acordo com seus dados <strong>/outputs/search/weight/2,34</strong> - <strong>GET</strong> <br>
4 - Enivar emails aos destinatários autorizados caso algum insumo esteja próximo à quantidade limite ou caso chegue a mesma <br>
5 - Resgistrar as atividades dos funcionários por meio de chaves estrangeiras.<br>
6 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas. Por exemplo, se sair 1kg de arroz, as linhas responsáveis pelo peso total e quantidade na tabela dos insumos serão alteradas.

### Funcionalidades dos Funcionários

1 - Listar funcionários <strong>/employees</strong> - <strong>GET</strong> <br>
2 - Criar novos funcionários <strong>/employees</strong> - <strong>POST</strong> <br>
3 - Atualizar os dados dos funcionários <strong>/employees/id</strong> - <strong>PUT</strong> <br>
4 - Deletar funcionários <strong>/employees/id</strong> <strong>DELETE</strong> <br>
5 - Pesquisar funcionários de acordo com seus dados <strong>/employees/search/email/emailAqui</strong> -
 <strong>GET</strong> <br>
6 - Registrar em uma tabela os logs dos funcionários (data e hora do login, email e chave estrangeira) <br>
7 - Gerar JWT para o login de todos os funcionários, independentemente do nível de acesso. <strong>/tokens</strong> <strong>POST</strong> <br>

### Funcionalidades das vendas

1 - Registrar vendas <strong>/sales</strong> - <strong>POST</strong> <br>
2 - Listar as vendas <strong>/sales</strong> - <strong>GET</strong> <br>
3 - Atualizar dados das vendas <strong>/sales/id</strong> - <strong>PATCH</strong> <br>
4 - Pesquisar por vendas de acordo com seus dados <strong>/sales/search/client_name/nomeAqui</strong> - <strong>GET</strong> <br>

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
