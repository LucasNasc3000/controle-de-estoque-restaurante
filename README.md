# Storage Manager System
Esta é uma API desenvolvida para o controle de estoque de um restaurante. O sistema foi construído na arquitetura
REST. Sendo o lado do servidor de uma aplicação web, este sistema foi desenvolvido com Node js para a programação das rotinas, rotas e validações de dados.
A base de dados é em MySql e para lidar ela fiz uso do Sequelize ORM (Mapeador Objeto Relacional) para a modelagem de dados e para facilitar o uso do banco de dados.

## Funcionalidades
### Funcionalidades dos Insumos

1 - Cadastrar novos insumos<br>
2 - Pesquisar por um ou mais insumos de acordo com seus dados<br>
3 - Atualizar um ou mais dados relativos aos insumos<br>
4 - Determinar uma quantidade mínima de insumos no estoque (opcional)<br>
5 - Registrar todas as operações que os usuários realizarem por meio de uma chave estrangeira<br>

### Funcionalidades das Saídas

1 - Registrar os dados relativos aos insumos que saíram<br>
2 - Pesquisar pelas saídas dos insumos de acordo com seus dados<br>
3 - Enivar e-mails aos destinatários autorizados caso algum insumo esteja próximo à quantidade limite ou caso chegue a mesma<br>
4 - Resgistrar as atividades dos funcionários por meio de chaves estrangeiras<br>
5 - Atualizar a base de dados dos insumos cadastrados de acordo com as saídas Por exemplo, se sair 1kg de arroz, as linhas responsáveis pelo peso total e quantidade na tabela dos insumos serão alteradas<br>

### Funcionalidades dos Funcionários

1 - Criar novos funcionários<br>
2 - Atualizar os dados dos funcionários<br>
3 - Pesquisar funcionários de acordo com seus dados<br>
4 - Registrar em uma tabela os logs dos funcionários (data e hora do login, email e chave estrangeira)<br>
5 - Gerar JWT para o login de todos os funcionários, independentemente do nível de acesso<br>

### Funcionalidades das Vendas

1 - Registrar vendas<br>
2 - Atualizar dados das vendas<br>
3 - Pesquisar por vendas de acordo com seus dados<br>

### Funcionalidades dos Lembretes

1 - Registrar lembretes<br>
2 - Atualizar lembretes<br>
3 - Deletar lembretes<br>
4 - Recuperar lembretes<br>
5 - Enviar os lembretes por e-mail<br>

## Acessos

Nesta aplicação existem diferentes acessos para cada funcionalidade e estes são concedidos por meio da verificação de dados específicos enviados pelo cabeçalho da requisição, como id, permissão e a senha de administrador, caso o funcionário tenha este acesso, além do JWT, exigido para todos os funcionários.<br>Os acessos são:<br>
- Acesso total: acesso à todas as funcionalidades da API. Este é o único tipo de acesso com o qual é possível utilizar as funcionalidades dos funcionários <br>
### Acessos únicos <br>
- Insumos: permite ao funcionário utilizar todas as funcionalidades dos insumos --> inputsCRUS
- Saídas: permite ao funcionário utilizar todas as funcionalidades das saídas --> outputsCRS
- Vendas: permite ao funcionário utilizar todas as funcionalidades das vendas --> salesCRUS <br> 
### Acessos mistos <br>
- Insumos e saídas: funcionalidades dos insumos e das saídas disponíveis --> inputs-outputs
- Saídas e vendas: funcionalidades das saídas e das vendas disponíveis --> sales-outputsCRUS
- Insumos, saídas e vendas: funcionalidades dos insumos, das saídas e das vendas disponíveis --> salesInOutCRUS

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
### Variáveis de ambiente
- Na raiz do projeto crie um arquivo com o nome .env
- Copie e cole no .env estas variáveis de ambiente:<br>
  *Importante: use os mesmos nomes para base de dados, usuário e senha do comando docker ou troque quando rodar o comando<br>
  ```
  DATABASE= //nome da sua base de dados
  DATABASE_HOST= //127.0.0.1 ou o ip da sua máquina
  DATABASE_PORT= //sua porta para banco de dados
  DATABASE_USERNAME= //usuario da sua base de dados
  DATABASE_PASSWORD= //senha da sua base de dados

  JWT_SECRET= //escolha uma sequencia de caracteres grande e complexa
  JWT_EXPIRATION=5d  //quantidade de dias 1d, 2d, etc...

  OUTPUTS_PERMISSION= //escolha um nome
  INPUTS_PERMISSION= //escolha um nome
  INPUTS_OUTPUTS_PERMISSION= //escolha um nome
  SALES_PERMISSION= //escolha um nome
  SO_PERMISSION= //escolha um nome
  SOI_PERMISSION= //escolha um nome
  ADMIN_PERMISSION= //escolha um nome

  FROM_EMAIL= //escolha um e-mail
  ADDRESS_ALLOWED= //escolha uma sequência de caracteres para funcionários com autorização para receber e-mails (ex: y/n)
  SENDGRID_API_KEY= //caso você use, coloque aqui sua api key do sendgrid, necessário somente para o envio de e-mails
  ```

### Banco de dados
- Crie um schema MySql e o sequelize fará todo o resto

### Quem desejar acessar a documentação em swagger, ou rodar o projeto caso tenha instaladas em sua máquina todas as dependências necessárias --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- Na raiz do projeto --><br>
- `npm install` ou `npm i`<br>
- `npx sequelize db:migrate`<br>
- `npm run dev`<br>
- Acessar no seu navegador a url `localhost:3333/doc`

### Para usar a api, caso você tenha docker na sua máquina --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- Entrar em `dist/database` e rodar `sudo docker build -t mydb:database .`<br>
- Rodar em dist/database `sudo docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=controleestoque -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword mydb:database`<br>
- Alterar a variável de ambiente `DATABASE_HOST` no dockerfile na raiz do proejeto para localhost ou o ip da sua máquina<br>
- Na raiz do projeto rodar `sudo docker build -t nodeapp:app .`
- Rodar o comando `sudo docker images` e copiar o id da imagem nodeapp:app
- `sudo docker run -p 3333:3333 <id_nodeapp>`

# Storage Manager system
This is an API developed for the storage control of a restaurant. The system was built in the REST architecture. Being the server side of a web application, this system was developed with Node js for programming routines, routes and data validations. The database is in MySql and to handle it I used the Sequelize ORM (Object Relational Mapper) for data modeling and to facilitate the use of the database.

## Features
### Input Features
1 - Register new inputs<br>
2 - Search for one or more inputs according to their data<br>
3 - Update one or more data related to inputs<br>
4 - Determine a minimum quantity of inputs in stock (optional)<br>
5 - Record all operations that users perform using a foreign key<br>

### Output Features
1 - Record data related to inputs that have been output<br>
2 - Search for outputs of inputs according to their data<br>
3 - Send emails to authorized recipients if any input is close to the limit quantity or if it reaches it<br>
4 - Record employee activities using foreign keys<br>
5 - Update the database of registered inputs according to outputs. For example, if 1kg of rice is purchased, the lines responsible for the total weight and quantity in the inputs table will be changed<br>

### Employee Features
1 - Create new employees<br>
2 - Update employee data<br>
3 - Search for employees according to their data<br>
4 - Record employee logs in a table (login date and time, email and foreign key)<br>
5 - Generate JWT for all employees' logins, regardless of their access level<br>

### Sales Features
1 - Register sales<br>
2 - Update sales data<br>
3 - Search for sales according to their data<br>

### Advices Features
1 - Register advices<br>
2 - Update advices<br>
3 - Delete advices<br>
4 - Recover advices<br>
5 - Send advices content by e-mail<br>

## Accesses
In this application, there are different accesses for each functionality and these are granted by checking specific data sent by the request header, such as ID, permission and administrator password, if the employee has this access, in addition to the JWT, required for all employees.
The accesses are:

### Full access <br>
- access to all API functionalities. This is the only type of access with which it is possible to use employee features
### Single access <br>
- Inputs: allows the employee to use all input features --> inputsCRUS
- Outputs: allows the employee to use all output features --> outputsCRS
- Sales: allows the employee to use all sales features --> salesCRUS
### Mixed access <br>
- Inputs and outputs: available input and output features --> inputs-outputs
- Outputs and sales: available output and sales features --> sales-outputsCRUS
- Inputs, outputs and sales: available input, output and sales features --> salesInOutCRUS

## Status
Finalized ✔️ <br>
Note: updates will be made according to the needs of the front-end. Some additional features have already been defined but will only be implemented when the front-end is under development.

## Main Technologies Used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" hight=50px width=50px />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg" hight=50px width=50px />

## Documentation and usage
### Online documentation
➡️ https://devmainserver.com/doc

### Environment variables
- In the root of project create a file named .env
- Copy and paste these env variables below:<br>
  *Important: use the same database name, username and password of the docker statement or switch it<br>
  ```
  DATABASE= //your database name
  DATABASE_HOST= //127.0.0.1 or your pc ip
  DATABASE_PORT= //your database port
  DATABASE_USERNAME= //your database username
  DATABASE_PASSWORD= //your database password

  JWT_SECRET= //choose a big and complex sequence of characters
  JWT_EXPIRATION=5d  //number of days 1d, 2d, 3d, etc...

  OUTPUTS_PERMISSION= //choose a name
  INPUTS_PERMISSION= //choose a name
  INPUTS_OUTPUTS_PERMISSION= //choose a name
  SALES_PERMISSION= //choose a name
  SO_PERMISSION= //choose a name
  SOI_PERMISSION= //choose a name
  ADMIN_PERMISSION= //choose a name

  FROM_EMAIL= //choose a e-mail
  ADDRESS_ALLOWED= //choose a sequence of characters for employees whose authorized to receive e-mails (ex: y/n)
  SENDGRID_API_KEY= //if you do use, write here your sendgrid api key, it's necessary only for sending e-mails
  ```

### Banco de dados
- Create a MySql schema, sequelize will do all the rest

### If you want to access the documentation in swagger or run the project, if you have all necessary dependencies installed on your machine --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- In the root of the project --><br>
- `npm install` or `npm i`<br>
- `npx sequelize db:migrate`<br>
- `npm run dev`<br>
- Access the url `localhost:3333/doc` in your browser

### To use the api, if you have docker on your machine --><br>
- `git clone https://github.com/LucasNasc3000/controle-de-estoque-restaurante`<br>
- Enter `dist/database` and run `sudo docker build -t mydb:database .`<br>
- Run `sudo docker run -d in dist/database -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=controleestoque -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword mydb:database`<br>
- Change the environment variable `DATABASE_HOST` in the dockerfile at the root of the project to localhost or the IP of your machine<br>
- At the root of the project, run `sudo docker build -t nodeapp:app .`
- Run the command `sudo docker images` and copy the image id nodeapp:app
- `sudo docker run -p 3333:3333 <id_nodeapp>`
