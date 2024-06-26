import fastify from "fastify";

const server = fastify();

const PI = process.env.PI;

server.get("/", async (request, reply) => {
  return { hello: `${PI}` };
});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen({ host: "0.0.0.0", port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
