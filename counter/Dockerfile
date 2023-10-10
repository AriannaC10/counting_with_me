# Builder Image

FROM node:18.15-alpine as build-deps

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./
RUN npm install


# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]    
