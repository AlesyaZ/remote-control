import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';
import { listenerAction } from '../commands/listener';

export const startWebSocket = (PORT) => {
  const wss = new WebSocketServer({ port: PORT });

  wss.on('connection', (ws: WebSocket) => {
    console.log(`The WebSocket is running on a port: ${PORT}`);

    const webSocketStream = createWebSocketStream(ws, {
      decodeStrings: false,
      defaultEncoding: 'utf8',
    });

    webSocketStream.on('data', async (data: string) => {
      try {
        const [command, ...coordinates] = data.toString().split(' ');
        const result = await listenerAction(command, coordinates);

        webSocketStream.write(result);
      } catch (error) {
        console.log(`${error.message}`);
      }
    });
    ws.on('close', () => {
      console.log('WebSocket disconnected');
    });
  });
  process.on('SIGINT', () => {
    console.log('WebSocket closed');
    wss.close();
  });
};
