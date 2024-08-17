import http from "http";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer();
const PORT = process.env.PORT;

server.listen(PORT, async () => {
  console.log(`Listening to port ${PORT}`);
});
