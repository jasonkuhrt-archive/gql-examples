
# Prisma Stitch Demo <!-- omit in toc -->

This is a demo showing a Prisma Service being fronted by a GraphQL Gateway.

Prisma v1.20

- [Quickstart](#quickstart)
- [About](#about)
- [Features](#features)
- [Observations](#observations)
- [Unresolved Issues](#unresolved-issues)
  - [Use Schema Transform to hide `User.deactivated` from Gateway](#use-schema-transform-to-hide-userdeactivated-from-gateway)
  - [Transform workflow](#transform-workflow)
  - [Subscription with relation in where clause not working](#subscription-with-relation-in-where-clause-not-working)
- [Query Journey](#query-journey)
  - [Observe new users](#observe-new-users)
  - [Channel observation](#channel-observation)
- [References](#references)
- [TODO](#todo)

### Quickstart

First ensure you have the following globally installed:

```
brew tap prisma/prisma
brew install prisma
```
```
yarn global add graphql-cli
```

Its possible to install prisma from npm too:

```
yarn global add prisma
```

Get the Prisma Server (what runs Prisma Services) running first:

```
cd prisma && docker-compose up
```

Once up you may explore its management API:

```
open http://localhost:4466/management
```

In another terminal (or run docker-compose with `--detach`) deploy the prisma service:

```
prisma deploy
```

```
yarn && yarn dev
```


### About

This shows how a gateway can work with the schema of an underlying GQL service, such as Prisma (this case). Unlike a simple passthrough we merge schema features of the local and remote server.

### Features

- A remote schema for a db microservice is stitched into the Gateway
- The remote schema is transformed before being exposed at the Gateway
  - Mutation types are not used
  - Queries are
  - TODO Subscriptions are
  - TODO Certain fields on certain types are stripped away in the Gateway schema like `User.deactivated`.
- Logical API design at the gateway level delegating to CRUD APIs
- SDK for remote db microservice is generated using `graphql-bindings`
- Mutation, Query, and Subscription operations delegation via said SDK
- Schema transform in Gateway to filter out some Query fields
- Example of using Prisma [nested mutations](https://www.prisma.io/docs/reference/prisma-api/mutations-ol0yuoz6go#nested-mutations) feature


### Observations

* The app code is organized by function. Namely the schema is in one place while the resolvers are in another. A more modular approach can be taken, but it is not explored here.
* A passthrough for a resolver could look like either of the following:

```ts
user: (_, args, ctx, info) => {
    return ctx.core.query.users(args, info)
}
```
```ts
user: PrismaBinding.forwardTo("core"),
```



### Unresolved Issues

#### Use Schema Transform to hide `User.deactivated` from Gateway

I needed to transform fields of a type but this is not possible with `graphql-tools` yet:

- https://github.com/apollographql/graphql-tools/issues/819

It is possible however with another transformation library

- https://github.com/prismagraphql/graphql-transform-schema

The issue there is that it is not done, not active, has a few old open issues. An attempt to use it yielded a type error, which I reported but have no fix for yet:

- https://github.com/prismagraphql/graphql-transform-schema/issues/15

#### Transform workflow

* https://github.com/apollographql/graphql-tools/issues/874

#### Subscription with relation in where clause not working

* https://github.com/prismagraphql/graphql-yoga/issues/383

### Query Journey

```graphql
query getUsers {
  users {
    id
    email
  }
}

mutation createUser($email: String!) {
  signup(email: $email) {
    id
    email
  }
}



subscription observeNewUsers {
  user(where:{mutation_in:[CREATED]}) {
    updatedFields
    mutation
    previousValues {
      id
      email
    }
    node {
      id
      email
    }
  }
}

# Queries to test the CRUD of a user
mutation signupJason {
  signup(email: "jasonkuhrt@me.com") {
    id
    email
  }
}

query getJason {
  user(where: {email: "jasonkuhrt@me.com"}) {
    id
    email
  }
}

mutation deactivateJason {
  deactivateByEmail(email:"jasonkuhrt@me.com") {
    id
    email
  }
}
```

#### Observe new users

This to try in the playground.

Make a subscription to all new users created:

```graphql
subscription observeNewUsers {
  user(where: { mutation_in: [CREATED] }) {
    updatedFields
    mutation
    previousValues {
      id
      email
    }
    node {
      id
      email
    }
  }
}
```

#### Channel observation

Directly on Prisma:

```graphql
subscription watchChan {
  message(
    where: {
      AND: {
        mutation_in: [CREATED, UPDATED, DELETED],
        node: {
          channel:{
            id: "cjj0uh08i00270703fgniuq2a"
          }
        }
      }
    }
  ) {
    mutation,
    updatedFields,
    node{
      id
      content
    }
  }
```
```graphql
mutation fooMsg {
  createMessage(
    data: {
      content:"b",
      sent_at:"2018-06-30T03:20:25.044Z",
      channel: {
        connect: {
          id:"cjj0uh08i00270703fgniuq2a"
        }
      }
      author: {
        connect: {
          id:"cjimkrhxu000l08884zwbfsrg"
        }
      }
    }
  ) {
    id
    content
    channel {
      id
      users {
        id
      }
    }
  }
}
```

Create some users and observe what happens:

```graphql
mutation createUser($email: String!) {
  signup(email: $email) {
    id
    email
  }
}
```


### References

- Dec 12, 2017
  [GraphQL Schema Stitching explained: Schema Delegation](https://blog.graph.cool/graphql-schema-stitching-explained-schema-delegation-4c6caf468405)
- https://github.com/prismagraphql/prisma-binding
- https://oss.prisma.io/content/GraphQL-CLI/08-Codegen.html


### TODO

- [ ] See if we can make the playground read from query Journey on boot?
- [ ] Rename `sent_at` field in `core` schema to `sentAt`. Observe how data is migrated.
