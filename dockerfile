FROM node:alpine3.20

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

ENV DATABASE=controleestoque
ENV DATABASE_HOST=<localhost_ou_ip_da_sua_maquina>
ENV DATABASE_PORT=3306
ENV DATABASE_USERNAME=MainUser
ENV DATABASE_PASSWORD=MainPassword
ENV JWT_SECRET=qwdh2idwuwSDFKJEWNdesc
ENV JWT_EXPIRATION=5d
ENV OUTPUTS_PERMISSION=outputsCRS
ENV INPUTS_PERMISSION=inputsCRUS
ENV INPUTS_OUTPUTS_PERMISSION=inputs-outputs
ENV SALES_PERMISSION=salesCRUS
ENV SO_PERMISSION=sales-outputsCRUS
ENV SOI_PERMISSION=salesInOutCRUS
ENV ADMIN_PERMISSION=fullAccess

ENTRYPOINT ["sh", "-c", "npx sequelize db:migrate && node dist/server.js"]
