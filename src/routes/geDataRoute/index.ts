import { Router } from "express";
import getData from "../../middleware/getData";

const path: string = "/getdata";
const router = Router();

router.route(path).post(getData);

export const getDataRoute = {
  path,
  router,
};
