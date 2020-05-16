# pull official base image
FROM node:10 as react-build

ARG NODE_ENV
ENV PORT=80

# set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn   

# Build app
COPY . ./
RUN if [ ${NODE_ENV}} = "production" ] ; then yarn build:production ; else yarn build:staging ; fi
RUN rm -R src
RUN yarn global add serve

# Start app
CMD ["serve", "-s" ,"build"]