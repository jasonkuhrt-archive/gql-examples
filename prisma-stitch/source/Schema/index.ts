import * as GQLImport from "graphql-import"

const typeDefs = GQLImport.importSchema(`${__dirname}/Main.graphql`)

export * from "./Types"
export { typeDefs }
