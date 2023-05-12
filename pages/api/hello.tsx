import type { NextApiRequest, NextApiResponse } from "next"
import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import { Challenge } from "../../types/challengeTemp"

export const updatechallengeMark = async (cardId: ObjectId, userId: string) => {
  const mongoClient = await clientPromise
  const challenges = await mongoClient
    .db("active")
    .collection("challenges")
    .updateOne({ _id: cardId }, { $push: { marked: userId } })
}

export const challengesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id, userId } = req.query
  if (req.method === "PUT") {
    try {
      const cardId = new ObjectId(id as string)
      await updatechallengeMark(cardId, userId as string)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  } else {
    res.status(405).end()
  }
}
export default challengesHandler
