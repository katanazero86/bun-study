// bun-http.ts

const server = Bun.serve({
  development: false,
    port: 3001,
  // fetch() {
  //     return new Response('Hello, Bun!');
  // }
  async fetch(req) {
    throw new Error('미쳤어!', {cause: '에러에러!'});
    // const data = await req.json();
    // return Response.json({
    //   name: data.name,
    //   msg: "hi",
    // }, {
    //     status: 201,
    //     headers: {
    //         test: 'zzzz'
    //     }
    // });
  },
  error(error) {
      return new Response(error.message, {status: 500})
  },
});

console.log(`Server is running on http://${server.hostname}:${server.port}`);