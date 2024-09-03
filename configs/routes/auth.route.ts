import { AuthController } from "@controllers";
import { Router } from "express";
import { Route } from ".";
import { RestActions } from "../enum";

export class AuthRoute {
  private static path = Router();
  private static authController = new AuthController();

  public static draw() {
    this.path.route("/signup").post(this.authController.create);
    this.path.route("/signin").post(this.authController.signIn);
    Route.resource(this.path, this.authController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
