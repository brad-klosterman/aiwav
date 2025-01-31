FROM node:21-alpine3.18

# Base Development Packages
RUN apk update && \
  apk upgrade && \
  apk add ca-certificates wget && \
  update-ca-certificates && \
  apk add terraform --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community && \
  apk add --no-cache --update \
  git \
  curl \
  openssh \
  bash \
  python3 \
  groff \
  less \
  make \
  ncurses \
  vim \
  nano \
  rsync \
  xterm \
  zip \
  terraform \
  ffmpeg

RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
  echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
  apk add doppler && \
  rm /var/cache/apk/*

#Update Python 3 PIP
RUN python3 -m ensurepip && \
  rm -r /usr/lib/python*/ensurepip && \
  pip3 install --upgrade pip setuptools && \
  if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
  if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi

# AWS CLI
RUN pip install --upgrade pip
RUN pip install awscli

# Slightly more boring Docker Prompt (doesn't need ncurses anymore, and multi-line seems to be fixed)
RUN printf 'export PS1="\[\e[30;48;5;68m\] [DOCKER] \[\e[0m\] \\t \[\e[40;38;5;28m\][\w]\[\e[0m\] \$ "' >> ~/.bashrc

ARG PROJECT=mediaProcessingServer

ENV TERM xterm-256color

RUN mkdir -p /src/node_modules

COPY package.json pnpm-lock.yaml /src/

WORKDIR /src

RUN npm i -g pnpm

RUN pnpm install

COPY dist/ /src/

EXPOSE 4000

ENV DOPPLER_TOKEN=${DOPPLER_TOKEN}

ENTRYPOINT ["doppler", "run", "--"]

CMD ["node", "app-local.js"]
