# prisma-stitch

#### About

This shows how a gateway can work with the schema of an underlying GQL service, such as Prisma (this case). Unlike a simple passthrough we merge schema feature of the local and remote server.

#### Example Queries

This to try in the playground.

Make a subscription to all new users created:

```
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

#### References

- Dec 12, 2017
  [GraphQL Schema Stitching explained: Schema Delegation](https://blog.graph.cool/graphql-schema-stitching-explained-schema-delegation-4c6caf468405)
- https://github.com/prismagraphql/prisma-binding
- https://oss.prisma.io/content/GraphQL-CLI/08-Codegen.html
