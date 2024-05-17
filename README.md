# Sistema de controle de estoque
Esta é uma API desenvolvida para o controle de estoque de um restaurante fictício. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas, validações de dados e para
ser o servidor por meio da biblioteca http, nativa do Node js.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados, implicando
em menos código, pois com um ORM não é necessário escrever códigos Sql.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos <strong>/inputs</strong> <strong>POST</strong> <br>
2 - Deletar Insumos <strong>/inputs/id</strong>  <strong>DELETE</strong> <br>
3 - Fornecer uma lista contendo todos os insumos <strong>/inputs</strong> <strong>GET</strong> <br>
4 - Pesquisar por um ou mais insumos de acordo com: id, tipo, nome, quantidade, peso total,
    peso por unidade, fornecedor, data de entrada e data de vencimento <strong>/inputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong>  
    <strong>GET</strong> <br>
5 - Atualizar um ou mais dados relativos aos insumos <strong>/inputs/id</strong> <strong>PUT</strong> <br>
6 - Registrar todas as operações que os usuários realizarem <strong>/inputs</strong> <strong>POST</strong> <br>
7 - Diferentes níveis de acesso. Por exemplo, um funcionário que registra as saídas dos insumos não poderá adicionar<br>
    novos insumos, alterar os dados relativos a eles ou deleta-los.<br>

### Funcionalidades das Saídas

1 - Registrar as quantidades dos insumos que saíram (vendas) <strong>/outputs</strong> <strong>POST</strong> <br>
2 - Listar os insumos que saíram com todos os dados relativos aos mesmos <strong>/outputs</strong> <strong>GET</strong> <br>
3 - Pesquisar pelas saídas dos insumos com base em: id, tipo, nome, peso total, peso por unidade, unidades,
    data e hora. <strong>/outputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> <strong>GET</strong> <br>
4 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas. Por exemplo, se sair 1kg de <br>
    arroz, as linhas responsáveis pelo peso total, peso por unidade e quantidade na tabela dos insumos serão<br>
    alteradas <strong>/inputs/id</strong> <strong>PUT</strong> <br>

### Funcionalidades dos Usuários

1 - Listar usuários <strong>/users</strong> <strong>GET</strong> <br>
2 - Criar novos usuários <strong>/users</strong> <strong>POST</strong> <br>
3 - Atualizar os dados dos usuários. Alguns não necessitarão de permissões específicas para serem alterados. <strong>/users/id</strong> <strong>PUT</strong> <br>
4 - Deletar usuários </strong>/users/id<strong> <strong>DELETE</strong> <br>
5 - Pesquisar usuários com base em id, nome, email ou logs <strong>/users/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> <strong>GET</strong> <br>
6 - Criar um arquivo (formato do arquivo em aberto) registrando a data e a hora em que os usuários logaram </strong>/users<strong> <strong>POST</strong> <br>
7 - Criar registros no banco de dados para as atividades dos usuários enquanto logados <strong>/users</strong> <strong>POST</strong> <br>
8 - Gerar JWT para o login de todos os usuários, independentemente do nível de acesso. <strong>/tokens</strong> <strong>POST</strong> <br>
9 - Verificação adicional de credenciais para o login de usuários com maiores níveis de acesso. <strong>/users</strong> <strong>GET</strong> <br>

## Status
Em Desenvolvimento 🛠️

## Principais Tecnologias Utilizadas
- Node js
- Express
- MySql
- Sequelize ORM
