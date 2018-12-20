import * as Tools from "graphql-tools"

const renameMutation = (
  before: string,
  after: string
): Tools.RenameRootFields => {
  return new Tools.RenameRootFields((op, name) => {
    return op === "Mutation" && name == before ? after : name
  })
}

const hideQueriesMatching = (pattern: RegExp): Tools.FilterRootFields => {
  return new Tools.FilterRootFields((op, name) => {
    return !(op === "Query" && pattern.test(name))
  })
}

export { renameMutation, hideQueriesMatching }
