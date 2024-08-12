# Sistema de controle de estoque
Esta é uma API desenvolvida para o controle de estoque de um restaurante fictício. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas e validações de dados.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos  <strong>/inputs</strong> - <strong>POST</strong> <br>
2 - Fornecer uma lista contendo todos os insumos  <strong>/inputs</strong> - <strong>GET</strong> <br>
3 - Pesquisar por um ou mais insumos de acordo com: id, tipo, nome, quantidade, peso total,
    peso por unidade, fornecedor, data de entrada, data de vencimento ou pelo id do funcionário que o registrou <strong>/inputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> -   
    <strong>GET</strong> <br>
4 - Atualizar um ou mais dados relativos aos insumos <strong>/inputs/id</strong> <strong>PUT</strong> <br>
5 - Determinar uma quantidade mínima de insumos no estoque (opcional)
6 - Registrar todas as operações que os usuários realizarem por meio de uma chave estrangeira

### Funcionalidades das Saídas

1 - Registrar os dados relativos aos insumos que saíram <strong>/outputs</strong> - <strong>POST</strong> <br>
2 - Listar todas as saídas <strong>/outputs</strong> - <strong>GET</strong> <br>
3 - Pesquisar pelas saídas dos insumos com base em: id, tipo, nome, peso total, peso por unidade, unidades,
    data, hora ou pelo id do funcionário que a registrou. <strong>/outputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> -<strong>GET</strong> <br>
4 - Enivar emails aos destinatários autorizados caso algum insumo esteja próximo à quantidade limite ou caso chegue a mesma <br>
5 - Resgistrar as atividades dos funcionários por meio de chaves estrangeiras.
6 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas. Por exemplo, se sair 1kg de <br>
    arroz, as linhas responsáveis pelo peso total e quantidade na tabela dos insumos serão<br>
    alteradas.

### Funcionalidades dos Funcionários

1 - Listar funcionários <strong>/employees</strong> - <strong>GET</strong> <br>
2 - Criar novos funcionários <strong>/employees</strong> - <strong>POST</strong> <br>
3 - Atualizar os dados dos funcionários <strong>/employees/id</strong> - <strong>PUT</strong> <br>
4 - Deletar funcionários <strong>/employees/id</strong> <strong>DELETE</strong> <br>
5 - Pesquisar funcionários com base em id, nome ou email<strong>/employees/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> -
 <strong>GET</strong> <br>
6 - Registrar em uma tabela os logs dos funcionários (data e hora do login, email e chave estrangeira) <strong>/employees</strong> <strong>POST</strong> <br>
7 - Gerar JWT para o login de todos os funcionários, independentemente do nível de acesso. <strong>/tokens</strong> <strong>POST</strong> <br>

### Funcionalidades das vendas


## Status
Finalizado ✔️
Obs: atualizações serão feitas conforme as necessidades do front-end. Algumas funcionalidades adicionais já foram definidas mas serão implementadas somente quando
o front-end estiver em desenvolvimento.

## Principais Tecnologias Utilizadas
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg" hight=50px width=50px />
