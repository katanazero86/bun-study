import { Elysia } from "elysia";
import { usersRoute } from "./my-elysia-routes";

const app = new Elysia()
  .get("/", "Hello Elysia")
  .get("/html", () => {
    // Bun.file() 로 html 을 읽어옴.
    return new Response(Bun.file(`${import.meta.dir}/index.html`), {
      headers: { "Content-Type": "text/html" },
    });
  })
  .get("/user/:id", ({ params: { id } }) => id)
  .post("/form", ({ body }) => body)
  .use(usersRoute)
  .listen(3000);

console.log(app);
console.log(`✅ Server is running at http://${app.server.hostname}:${app.server.port}`);
