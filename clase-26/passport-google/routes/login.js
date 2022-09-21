import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/google", (req, res) => {
  console.log(req.user);
  res.send(`<h1>${req.user.displayName}</h1>
          <img src="${req.user.photos[0].value}">`);
});

export { loginRouter };
