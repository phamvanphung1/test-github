import { BookController } from "@controllers";
import { Router } from "express";
import { Route } from ".";
import { RestActions } from "../enum";

export class BookRoute {
  private static path = Router();
  private static bookController = new BookController();

  public static draw() {
    this.path.route("/").post(this.bookController.create);
    this.path.route("/").get(this.bookController.index);


    return this.path;
  }
}
