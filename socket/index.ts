// socket/index.ts

const server = Bun.serve({
  fetch(req, server) {
    const { pathname } = new URL(req.url);
    if (pathname === "/chat") {
      if (server.upgrade(req)) {
        return; // do not return a Response
      }
      return new Response("Upgrade Fail!", { status: 500 });
    }

    return new Response("hello!, Socket!");
  },
  websocket: {
      open(ws) {
          console.log('open..');
      },
      message(ws, message) {
          console.log(message);
          ws.send(message); // echo message
      },
      close(ws, code, message) {
        console.log('close..', code, message);
      }
  }
});
console.log(`bun server run port: ${server.port}`);
