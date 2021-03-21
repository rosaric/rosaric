import { fastify } from 'fastify'
import { init } from '@rosaric/core'

const server = fastify()

init.on(() => {
  server.listen(3000)
})
