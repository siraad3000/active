import { ObjectId } from "mongodb";

export type Challenge = {
  _id?: ObjectId;
  title: string;
  publisher?: string | null;
  publisherId: string;
  description: string;
  location: string;
  date: string;
  time: string;
  attending?: string[];
  pictureId?: string | null;
};
