FROM node:alpine3.20

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

ENV DATABASE=controleestoque
ENV DATABASE_HOST=<host_aqui>
ENV DATABASE_PORT=3306
ENV DATABASE_USERNAME=MainUser
ENV DATABASE_PASSWORD=MainPassword
ENV JWT_SECRET=qwdh2idwuw&%$*SDFKJEWN!desc
ENV JWT_EXPIRATION=5d

ENTRYPOINT ["sh", "-c", "npx sequelize db:migrate && npm run dev"]
