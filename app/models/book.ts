import sequelize from "@configs/database";
import { Sequelize } from "sequelize";

export interface BookAttributes {
  title?: string;
  author?: string;
  publishedDate?: Date;
  userId?: number;
}

export interface BookInstance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  title: string;
  author: string;
  publishedDate: Date;
  userId: number;
}

export const book = sequelize.define("book", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  publishedDate: Sequelize.DATE,
  userId: Sequelize.INTEGER,
});
export const associate = () => {};
export default { book, associate };
