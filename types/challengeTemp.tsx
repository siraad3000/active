import { ObjectId } from "mongodb";
export type attending = {
  name: string;
  avatar: string;
};
export type challenge = {
<<<<<<< HEAD
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
=======
  _id?: ObjectId
  title: string
  description: string
  level: string
  showFor: string
  location: string
  date: string
  time: string
}
>>>>>>> 62892dff4c266331d21393b4bcc9edbba9641e75
