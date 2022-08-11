import express, { Request, Response } from "express"

const server = express()

server.get("/", (req: Request, res: Response) => {
  res.send("Application works!")
})

server.listen(3000, () => {
  console.log("Application started on port 3000!")
})
