import { ObjectId } from "mongodb";
export type attending = {
  name: string;
  avatar: string;
};
export type challenge = {
  publisher: string;
  _id?: ObjectId;
  title: string;
  description: string;
  level: string;
  showFor: string;
  location: string;
  date: string;
  time: string;
  attending: attending[];
};
