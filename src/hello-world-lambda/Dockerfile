FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build
RUN mkdir /asset && cp -r ./dist /asset