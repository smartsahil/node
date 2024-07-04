import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3001;
console.log(global);

const server = createServer((req, res) => {
  res.write;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/HTML");
  res.end("<h1>Hello World!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
