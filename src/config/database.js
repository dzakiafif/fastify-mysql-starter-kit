import 'dotenv/config';
import fastifyPlugin from "fastify-plugin";
import fastifyMysql from "@fastify/mysql";

async function dbConnector(fastify, _options) {
    await fastify.register(fastifyMysql, {
        promise: true,
        connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
    })

    console.log('Successfully connected to database');
}

export default fastifyPlugin(dbConnector);