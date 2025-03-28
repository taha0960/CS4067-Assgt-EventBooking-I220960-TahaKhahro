# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port the service runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "index.js"]
