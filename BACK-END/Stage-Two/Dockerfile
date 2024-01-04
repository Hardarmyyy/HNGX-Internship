# Use an official Node.js runtime as a parent image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy only the necessary files, excluding the 'node_modules' directory
COPY . .

# Make port available to the world outside this container
EXPOSE 3070

# Run the command
CMD ["npm", "run", "start"]




