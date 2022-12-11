const Koa = require("koa");
const { koaBody } = require("koa-body");
const app = new Koa();

app.use(koaBody());

let books = require("./routes/books.js");

app.use(books.routes());

// response
app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(3000);
