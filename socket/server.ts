// socket/server.ts

const server = Bun.serve({
    fetch(req, server) {
        const {pathname} = new URL(req.url);
        if(pathname === '/chat') {
            if(server.upgrade(req)) return;
            return new Response('Upgrade Fail', {status: 500})
        }

        return new Response('Hello, Bun!');
    },
    websocket: {
        open(ws) {
            console.log('open..');
        },
        message(ws, message) {
            console.log('received message', message);
            ws.send(message); // echo
        },
        close(ws, code, message) {
            console.log('close..', code, message);
        }
    },
    port: 5000,
});

console.log(`Server run port: ${server.port}`);