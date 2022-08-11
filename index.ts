import path from "path"
import dotenv from "dotenv"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { loadFilesSync } from "@graphql-tools/load-files"
import { makeExecutableSchema } from "@graphql-tools/schema"

// Application Server || Array Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"))
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.ts"))

dotenv.config()

const startApolloServer = async () => {
  const app = express()
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  })
  const server = new ApolloServer({
    schema,
  })

  await server.start()
  server.applyMiddleware({ app, path: "/graphql" })
  app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${3000}`)
  })
}

startApolloServer()
