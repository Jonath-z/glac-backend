import bodyParser from "body-parser";
import express, { Application } from "express";
import routes, { TRoute } from "./routes";
import cors from "cors";

const app: Application = express();

const PORT: string | number = process.env.PORT || 8070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const initializeRoutes = (routes: TRoute[]) => {
  routes.forEach((route) => {
    app.use("/v1/", route.router);
  });
};

app.listen(PORT, () => {
  initializeRoutes(routes);
  console.log("server is running on PORT", PORT);
});
