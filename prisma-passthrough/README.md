# prisma-passthrough

A GQL Service passes queries to another GQL service, namely a Prisma service.

### Launching Locally

There are multiple services at play:

  1.  A Postgres database
  2.  A Prisma Server
  3.  A Prisma API
  4.  A GQL Service built on Node that we call our Passthrough API

To run them all locally:

```
cd prisma && docker-compose up -d
```

To deploy a Postgres database and Prisma Server

```
cd prisma && prisma deploy
```

To deploy our Prisma API

```
yarn dev
```
To start the Passthrough API

```
yarn playground
```

In a separate terminal, to play with queries.

### Notes

- There are some TypeScript type errors in the Node GQL service. It appears to be a bug. I have not investigated. Links to Github issues in code. Work around was to use `any`. Of course not good, removes type safety.

- Many examples of querying a GraphQL service might show something like: `https://foobar:9000/graphql`. A Prisma API is a bit different. Information about the path can be found in these [Prisma API configuration docs](<https://www.prisma.io/docs/reference/service-configuration/prisma.yml/yaml-structure-ufeshusai8#endpoint-(optional)>). The gist is: `http[s]://{prisma_server_host}/{prisma_service_name}/{prisma_service_stage}`.

- You can query in the playground at `http://localhost:4000` or `http://localhost:4466` but better yet is `yarn playground` which uses `graphql-cli` under the hood and makes it possible to make queries against either service from a single playground!

- There is no real magic about the intrespection under the covers. When the Playground boots for instance it makes a call to each listed endpoint to fetch the schema. It then uses the response to build a UI for exploring that schema. Here is an introspection query (simple one) with curl:

  ```
  curl http://localhost:4000 -H 'content-type: application/json' --data '{"operationName":null,"variables":{},"query":"{__schema{types{name}}}"}' | jq
  ```

  ```
  curl http://localhost:4466/passthrough-core/dev -H 'content-type: application/json' --data '{"operationName":null,"variables":{},"query":"{__schema{types{name}}}"}' | jq
  ```
