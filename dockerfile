# Dockerfile for backend application
FROM node:20-alpine AS ui-build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8080 (assuming your application runs on port 8080)
EXPOSE 8080

# Command to run the application
CMD ["node", "main.js"]
