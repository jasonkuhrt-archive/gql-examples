
# prisma-stitch <!-- omit in toc -->

- [About](#about)
- [Features](#features)
- [Observations](#observations)
- [Unresolved Issues](#unresolved-issues)
  - [Use Schema Transform to hide `User.deactivated` from Gateway](#use-schema-transform-to-hide-userdeactivated-from-gateway)
  - [Typing logic in resovlers](#typing-logic-in-resovlers)
  - [Transform workflow](#transform-workflow)
- [Query Journey](#query-journey)
  - [Observe new users](#observe-new-users)
- [References](#references)

TODO:

- [ ] Augment user with phone number field to better show how reactivating preserves data
- [ ] Investigate a better way to type args
- [ ] See if we can make the playground read from query Journey on boot?

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
- Operation delegation via said SDK
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

#### Typing logic in resovlers

In the following resolver:

```ts
user: (_, args, ctx, info) => {
  return ctx.core.query
    .users(F.mergeDeepRight(args, { where: { deactivated: false } }), info)
    .then(users => users[0] || null)
},
```

We have no type safety for the values passed into users method; The following would be accepted just as well:

```ts
F.mergeDeepRight(args, { wheree: { deaactivated: false } })
```

#### Transform workflow

* https://github.com/apollographql/graphql-tools/issues/874


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