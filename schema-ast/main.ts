import * as FS from "fs"
import * as Path from "path"
import * as GQL from "graphql"
import * as Util from "util"
import * as log from "signale"

const inspect = (x: unknown) => Util.inspect(x, { depth: null })

console.log()

const sdl = FS.readFileSync(Path.join(__dirname, "main.graphql"), "utf8")

log.success("read SDL\n\n", sdl)

const ast = GQL.buildASTSchema(GQL.parse(sdl))

log.success("parse into AST\n\n%s\n", inspect(ast))

log.success("Human\n\n%s\n", inspect(ast.getType("Human").astNode))
