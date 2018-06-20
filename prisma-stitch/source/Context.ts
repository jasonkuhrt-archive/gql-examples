import * as Core from "./Remotes/Core"

type Context = {
  core: Core.Prisma
}

let coreClient: Core.Prisma

const create = () => {
  if (coreClient === undefined) {
    coreClient = new Core.Prisma({
      endpoint: "http://localhost:4466/core/dev",
    })
  }
  return {
    core: coreClient,
  }
}

export { create, Context }
