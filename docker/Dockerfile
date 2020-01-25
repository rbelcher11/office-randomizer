FROM mysql:5.7

RUN apt-get update && \
    rm -rf /var/cache/apt/lists/*

COPY ./my.cnf /etc/mysql/conf.d

COPY ./sql/*.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
