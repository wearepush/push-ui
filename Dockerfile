FROM mhart/alpine-node:14

# Switch to directory with sources
WORKDIR /usr/src/app
ADD . /usr/src/app/

# Copy package json and install dependencies
COPY package.json package-lock.json ./

# Install (local) NPM packages/dependencies
RUN npm install
RUN npm test
RUN npm run build-storybook

# Copy required stuff
COPY . .

# Expose SERVER ports
EXPOSE 8080

# Specify default CMD
CMD ["npm", "run", "server"]
