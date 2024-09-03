import sequelize from "@configs/database";
import { Sequelize } from "sequelize";

export interface UserAttributes {
  fullName?: string;
  userName?: string;
  email?: string;
  iAmRole?: string;
  hashPwd?: string;
}

export interface UserInstance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  fullName: string;
  userName: string;
  email: string;
  iAmRole: string;
  hashPwd: string;
}

export const user = sequelize.define("user", {
  fullName: Sequelize.STRING,
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  iAmRole: Sequelize.STRING,
  hashPwd: Sequelize.STRING,
});
export const associate = () => {};
export default { user, associate };
