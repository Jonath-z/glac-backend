import { NextFunction, Request, Response } from "express";

const getData = async (req: Request, res: Response, next: NextFunction) => {
  console.log("comming request", req.body);

  res.status(200).json({
    message: "request received",
    body: req.body,
  });

  next();
};

export default getData;
