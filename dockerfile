FROM node:alpine3.20

COPY package*.json ./

COPY . .

EXPOSE 3333

RUN npm install

ENV DB=controle_de_estoque
ENV DATABASE_HOST=34.44.162.110
ENV DATABASE_PORT=3306
ENV DATABASE_USERNAME=root
ENV DATABASE_PASSWORD=
ENV JWT_SECRET=qwdh2idwuw&%$*SDFKJEWN!desc
ENV JWT_EXPIRATION=5d

# Yes, this is not a good practice, but these three CMD commands are the only way I have found to perform migrations
CMD ["npx", "sequelize", "init"]

CMD ["npx", "sequelize", "db:migrate"]

CMD [ "npm", "run", "dev"]
