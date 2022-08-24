import { NextFunction, Request, Response } from "express";

const getData = async (req: Request, res: Response, next: NextFunction) => {
  console.log("comming request", req);
};

export default getData;
