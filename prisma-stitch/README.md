# prisma-stitch

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
- SDK for remote db microservice is generated (thanks to `graphql-bindings`) to support operation delegation.

### Example Queries

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

### Unresolved Issues

I needed to transform fields of a type but this is not possible with `graphql-tools` yet:

- https://github.com/apollographql/graphql-tools/issues/819

It is possible however with another transformation library

- https://github.com/prismagraphql/graphql-transform-schema

The issue there is that it is not done, not active, has a few old open issues. An attempt to use it yielded a type error, which I reported but have no fix for yet:

- https://github.com/prismagraphql/graphql-transform-schema/issues/15
