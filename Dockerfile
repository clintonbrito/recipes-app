# Use a imagem base do Node.js 16
FROM node:16-alpine

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package*.json ./
COPY package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o conteúdo do projeto para o contêiner
COPY . .

# Construa o aplicativo React
RUN npm run build

# Configure a porta na qual o aplicativo irá escutar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
