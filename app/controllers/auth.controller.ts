import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import models from "../models";

export class AuthController {
  public async index(req: Request, res: Response) {
    res.render("user.view/index");
  }

  public async create(req: Request, res: Response) {
    //api/v1/auth/signup
  }

  public async signIn(req: Request, res: Response) {
    try {
      //api/v1/auth/signin
      const { email, password } = req.body;
      const user = await models.user.findOne({ where: { email, password } });
      if (typeof user === "object") {
        const token = jwt.sign(user as object, "access_token", {
          expiresIn: "10d",
        });
        return res.json(token);
      } else {
        req.flash("errors", { msg: `sai tài khoản hay mật khẩu` });
        return res.redirect("/api/v1/auth");
      }
    } catch (e) {
      req.flash("errors", { msg: `sai tài khoản hay mật khẩu` });
      return res.redirect("/api/v1/auth");
    }
  }
}
