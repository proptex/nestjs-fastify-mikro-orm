Start a postgres database:

`docker run --name nestjs-fastify-mikro-orm-postgres -e POSTGRES_USER=nestjs-fastify-mikro-orm -e POSTGRES_PASSWORD=password -p 127.0.0.1:5432:5432 postgres:9.6.16`

Start node server:

```
npm install
npx mikro-orm schema:create -r
npm start
```

Send a post to http://localhost:3000/folders:

`curl -X POST "http://localhost:3000/folders" -H "Content-Type: application/json" -d "{}"`
