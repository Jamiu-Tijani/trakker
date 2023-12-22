# Step 1: Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json (if available) files
COPY package*.json ./

# Step 4: Install any needed packages specified in package.json
RUN npm install

# Step 5: Bundle the app's source code inside the Docker image
COPY . .

# Step 6: Build your app
RUN npm run build

# Step 7: Use serve to serve the static files
RUN npm install -g serve

# Step 8: Define the command to run the app
CMD ["serve", "-s", "build"]

# Step 9: Expose the port the app runs on
EXPOSE 3000
