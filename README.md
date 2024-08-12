# Sistema de controle de estoque
Esta é uma API desenvolvida para o controle de estoque de um restaurante fictício. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas e validações de dados.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos  <p style="font-size: 18px;">/inputs</strong> <strong>POST</strong> <br>
2 - Fornecer uma lista contendo todos os insumos  <strong>/inputs</strong> <strong>GET</strong> <br>
3 - Pesquisar por um ou mais insumos de acordo com: id, tipo, nome, quantidade, peso total,
    peso por unidade, fornecedor, data de entrada e data de vencimento <strong>/inputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong>  
    <strong>GET</strong> <br>
4 - Atualizar um ou mais dados relativos aos insumos <strong>/inputs/id</strong> <strong>PUT</strong> <br>
5 - Registrar todas as operações que os usuários realizarem por meio de uma chave estrangeira<strong>/inputs</strong> <strong>POST</strong> <br>

### Funcionalidades das Saídas

1 - Registrar as quantidades dos insumos que saíram (vendas) <strong>/outputs</strong> <strong>POST</strong> <br>
2 - Listar os insumos que saíram com todos os dados relativos aos mesmos <strong>/outputs</strong> <strong>GET</strong> <br>
3 - Pesquisar pelas saídas dos insumos com base em: id, tipo, nome, peso total, peso por unidade, unidades,
    data e hora. <strong>/outputs/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> <strong>GET</strong> <br>
5 - Verificar se a quantidade de insumos chegou ao limite ou está próxima dele <br>
4 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas. Por exemplo, se sair 1kg de <br>
    arroz, as linhas responsáveis pelo peso total e quantidade na tabela dos insumos serão<br>
    alteradas <strong>/inputs/id</strong> <strong>PUT</strong> <br>

### Funcionalidades dos Usuários

1 - Listar usuários <strong>/users</strong> <strong>GET</strong> <br>
2 - Criar novos usuários <strong>/users</strong> <strong>POST</strong> <br>
3 - Atualizar os dados dos usuários. Alguns não necessitarão de permissões específicas para serem alterados. <strong>/users/id</strong> <strong>PUT</strong> <br>
4 - Deletar usuários <strong>/users/id</strong> <strong>DELETE</strong> <br>
5 - Pesquisar usuários com base em id, nome ou email<strong>/users/search/<varia_de_acordo_com_parametro_de_pesquisa>/<dado_a_ser_pesquisado></strong> 
 <strong>GET</strong> <br>
6 - Registrar em uma tabela os logs dos usuários (data e hora do login, email e chave estrangeira) <strong>/users</strong> <strong>POST</strong> <br>
7 - Criar registros no banco de dados para as atividades dos usuários por meio de chaves estrangeiras contendo os ids dos usuarios em cada tabela<br>
8 - Gerar JWT para o login de todos os usuários, independentemente do nível de acesso. <strong>/tokens</strong> <strong>POST</strong> <br>
9 - Verificação adicional de credenciais para o login de usuários com maiores níveis de acesso. <strong>/users</strong> <strong>GET</strong> <br>

## Status
Em Desenvolvimento 🛠️

## Principais Tecnologias Utilizadas
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg" hight=50px width=50px />
