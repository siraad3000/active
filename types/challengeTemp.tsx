import { ObjectId } from "mongodb";

export type challenge = {
  _id?: ObjectId;
  publisher: string;
  title: string;
  description: string;
  category: string;
  location: string;
  time: string;
};
