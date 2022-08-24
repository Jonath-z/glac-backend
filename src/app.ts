import express, { Application } from "express";
import routes, { TRoute } from "./routes";

const app: Application = express();

const PORT: string | number = process.env.PORT || 8070;

const initializeRoutes = (routes: TRoute[]) => {
  routes.forEach((route) => {
    app.use("/api/v1/", route.router);
  });
};

app.listen(PORT, () => {
  initializeRoutes(routes);
  console.log("server is running on PORT", PORT);
});
