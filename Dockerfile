ARG NODE_VERSION=15.10.0
ARG PORT=4200

FROM node:${NODE_VERSION}

WORKDIR /usr/app
EXPOSE ${PORT}

COPY package.json yarn.lock ./

RUN export PATH=:"$PATH:/usr/app/node_modules/.bin:" && \
  yarn install --network-timeout 1000000000

# Copy the default system files
COPY docker/rootfs /

COPY . .

ENV PORT=${PORT}

CMD ["yarn", "serve:web"]

LABEL NODE_VERSION=${NODE_VERSION} \
PORT=${PORT}
