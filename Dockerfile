# pull official base image
FROM node:10 as react-build

ARG PRODUCT_GALLERY_MANAGER_URL
RUN echo "PRODUCT_GALLERY_MANAGER_URL=${PRODUCT_GALLERY_MANAGER_URL}"

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
CMD ["serve", "-s" ,"build"]