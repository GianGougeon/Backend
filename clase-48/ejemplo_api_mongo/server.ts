import { Application } from "./deps.ts";
import { router } from "./src/routes/users.routes.ts";

const app = new Application();

app.use(router.routes());

app.listen({ port: 8080 });
console.log(`Server on http://localhost:8080/`);
