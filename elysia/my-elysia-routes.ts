import { Elysia } from "elysia";

const app = new Elysia().group("/users", (app) => {
  return app
    .get("/", () => {
      return { message: "User list", users: [] }; // JSON 응답 자동 변환
    })
    .get("/:id", ({ params }) => {
      console.log(params.id);
      return { id: params.id, name: "John Doe" }; // JSON 형식으로 자동 변환
    })
    .get("/test", () => {
      return new Response("test", { status: 200 });
    });
});

export { app as usersRoute };
