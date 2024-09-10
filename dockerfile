FROM node:alpine3.20

COPY package*.json ./

COPY . .

EXPOSE 3333

RUN npm install

# Yes, this is not a good practice, but these three CMD commands are the only way I have found to perform migrations
CMD ["npx", "sequelize", "init"]

CMD ["npx", "sequelize", "db:migrate"]

CMD [ "npm", "run", "dev"]
