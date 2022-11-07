FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# RUN npm install
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose port
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]