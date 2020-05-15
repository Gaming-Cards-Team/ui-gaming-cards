# pull official base image
FROM node:10 as react-build

# set working directory
WORKDIR /app

# Copy app files
COPY build ./build

# Install serve server
RUN yarn global add serve

# Start app
CMD ["serve", "-s" ,"build"]