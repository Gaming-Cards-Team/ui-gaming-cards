# pull official base image
FROM node:10 as react-build

# set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn   

# Build app
COPY . ./
RUN yarn build
RUN rm -R src
RUN yarn global add serve

# Start app
RUN export PRODUCT_GALLERY_MANAGER_URL='http://ec2-3-22-170-115.us-east-2.compute.amazonaws.com:8080'
CMD ["serve", "-s" ,"build"]