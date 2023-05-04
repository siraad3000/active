import { ObjectId } from "mongodb";
export type authUser = {
  _id: string | ObjectId;
  name?: string;
  email?: string;
  image?: string;
  location?: string;
  description?: string;
  friends?: Array<string>;
};
export type User = {
  _id?: ObjectId;
  name?: string;
  email?: string;
  image?: string;
  location?: string;
  description?: string;
  friends?: Array<string>;
};

export type newUser = {
username: string;
email: string;
fname:string;
lname:string;
password: string;
terms: boolean;
};
