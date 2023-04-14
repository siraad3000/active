import { ObjectId } from "mongodb"

export type challenge = {
  _id?: ObjectId
  title: string
  description: string
  level: string
  showFor: string
  location: string
  date: string
  time: string
}
