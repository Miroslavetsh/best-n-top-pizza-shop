const path = require('path')
const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')

const server = express()
const router = jsonServer.router(path.dirname('server/index.ts') + '/public/db.json')

const PORT = process.env.PORT || 3001

const defaults = jsonServer.defaults({
  static: './build',
})

// middleware
server.use(cors())
server.use(defaults)
server.use('/', router)

server.listen(PORT, () => {
  console.log(`Server is Running... on port ${PORT}`)
})
