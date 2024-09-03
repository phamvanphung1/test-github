import { UserController } from "@controllers";
import { Router } from "express";

export class UserRoute {
  private static path = Router();
  private static userController = new UserController();

  public static draw() {
    this.path.get("/", this.userController.index);

    return this.path;
  }
}
