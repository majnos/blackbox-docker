# add stage as a source of buildkite-agent binary
FROM buildkite/agent:3 AS buildkite

# setup image based on node.js env
FROM 639820024964.dkr.ecr.ap-southeast-1.amazonaws.com/iflix-node:10.12.0 AS node
COPY --from=buildkite /usr/local/bin/buildkite-agent ./
WORKDIR /opt/app
COPY .npmrc /root/.npmrc
COPY package.json /opt/app/package.json
COPY package-lock.json /opt/app/package-lock.json
COPY . /opt/app/
RUN cd /opt/app && npm install
RUN cd /opt/app && npm run lint
