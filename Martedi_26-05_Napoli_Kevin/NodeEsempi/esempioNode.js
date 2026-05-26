const http = require("http");
const server = http.createServer((req, res) => {

res.writeHead(200, { "Content-Type": "text/plain" });
res.end("Hello World da Node.js!");
});

server.listen(3000, () => {
console.log("Server avviato su http://localhost:3000");
});