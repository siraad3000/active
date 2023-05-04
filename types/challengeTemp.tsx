import { ObjectId } from "mongodb"

export type Challenge = {
  _id?: ObjectId
  title: string
  publisher?: string | null
  description: string
  level: string
  showFor: string
  location: string
  date: string
  time: string
  attending?: string[]
  idpicture?: string | null
  idPublisher: string
}
