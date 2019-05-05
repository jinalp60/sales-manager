#FROM sameersbn/postgresql:10-1
FROM postgres:latest
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB salesmanager-product
ADD ./*.sql /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 5432
CMD ["postgres"]
#COPY start.sh /docker-entrypoint-initdb.d/start.sh