import 'dotenv/config';
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
import fastifyMultipart from '@fastify/multipart';
import fastifyJwt from '@fastify/jwt';
import dbConnector from './config/database';
const fastify = Fastify({ 
    logger: process.env.APP === 'development' ? {
      transport: {
          target: '@fastify/one-line-logger'
      }
  } : false
 });

fastify.register(fastifyCors, { origin: '*' });
fastify.register(fastifyFormbody);
fastify.register(fastifyMultipart);
fastify.register(dbConnector);
fastify.register(fastifyJwt, { secret: process.env.SECRET });

fastify.listen({ port: process.env.PORT }, function(err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})