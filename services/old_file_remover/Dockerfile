FROM ubuntu

WORKDIR /app

COPY . .

RUN chmod +x /app/cleanup_script.sh

ENTRYPOINT ["/app/cleanup_script.sh"]