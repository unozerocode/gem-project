# base image
FROM node:11

ARG GATSBY_STRIPE_S_KEY
ARG GATSBY_STRIPE_P_KEY

ENV GATSBY_STRIPE_P_KEY ${GATSBY_STRIPE_P_KEY}
ENV GATSBY_STRIPE_S_KEY ${GATSBY_STRIPE_S_KEY}

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies using yarn
ADD package.json /app/
RUN yarn --pure-lockfile

# Copy all frontend stuff to new "app" folder
COPY . /app/

RUN gatsby build
CMD ["gatsby", "serve", "-H", "0.0.0.0"]

EXPOSE 9000