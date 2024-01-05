import Fastify from "Fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.register(cors);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
