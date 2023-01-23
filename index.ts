import * as dotenv from 'dotenv';
import { httpServer } from './src/http_server/index';
import { startWebSocket } from './src/webSocket_server/index';

dotenv.config();

const port = process.env.PORT || 8181;
const wssPort = process.env.WSS_PORT || 8080;

httpServer.listen(port, () => {
  console.log(`The http server is running on a port: ${port}`);
});

startWebSocket(wssPort);

process.on('SIGINT', () => {
  console.log('Http server closed');
  process.exit();
});
