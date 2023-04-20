import { ObjectId } from "mongodb"

export type Users = {
  _id?: ObjectId
  name: string
  password: string
  description: string
  location: string
  friends: string[]
}
