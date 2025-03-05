FROM oven/bun:latest

#installation de curl
RUN apt-get -y update; apt-get -y install curl

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY ./src ./src

#pour la production
#CMD ["bun", "run", "start"] 

# pour le développement
CMD ["bun", "run", "dev"] 