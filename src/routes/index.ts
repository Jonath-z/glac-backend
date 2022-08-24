import { Router } from "express";
import { getDataRoute } from "./geDataRoute";

export type TRoute = {
  path: string;
  router: Router;
};

const routes: TRoute[] = [getDataRoute];

export default routes;
