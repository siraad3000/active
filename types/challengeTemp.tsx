import { ObjectId } from "mongodb"

export type challenge = {
  _id?: ObjectId
  title: string
  description: string
  location: string
  level: string
  date: String
  time: string
  showFor: string
}
