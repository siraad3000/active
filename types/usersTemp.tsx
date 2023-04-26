import { ObjectId } from "mongodb";

export type Users = {
  _id?: ObjectId;
  name: string;
  email: string;
  image: string;
};
