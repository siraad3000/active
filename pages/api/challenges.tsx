import type { NextApiRequest, NextApiResponse } from "next"
import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import { Challenge } from "../../types/challengeTemp"

export const getChallenges = async (): Promise<Challenge[]> => {
  const mongoClient = await clientPromise
  const challenges = (await mongoClient
    .db("active")
    .collection("challenges")
    .find()
    .toArray()) as Challenge[]
  return challenges
}

export const updatechallenge = async (
  cardId: ObjectId,
  userId: string,

) => {
  const mongoClient = await clientPromise
  const challenges = (await mongoClient
    .db("active")
    .collection("challenges")
    .updateOne({_id:cardId}, { $push : {"attending": userId}})
  )
}


export const getOneUsersChallenges = async (
  x: string
): Promise<Challenge[]> => {
  const mongoClient = await clientPromise
  const challenges = (await mongoClient
    .db("active")
    .collection("challenges")
    .find({ idPublisher: x })
    .toArray()) as Challenge[]
  return challenges
}

export const addChallenge = async (challenge: Challenge): Promise<ObjectId> => {
  const mongoClient = await clientPromise

  const response = await mongoClient
    .db("active")
    .collection("challenges")
    .insertOne(challenge)

  return response.insertedId
}

export const challengesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id, userId } = req.query;
  if (req.method === "POST") {
    const newChallenge = req.body as Challenge
    const createdChallenge = await addChallenge(newChallenge)
    res.status(201).json(createdChallenge)
  } else if (req.method === "GET") {
    const challenges = await getChallenges()
    res.status(200).json(challenges)
  } else if (req.method === 'PUT') {
    if (!id || !userId) {
      res.status(400).json({ error: 'Missing required query parameters' });
      return;
    }

    try {
      const cardId = new ObjectId(id as string);
      await updatechallenge(cardId, userId as string);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}
export default challengesHandler
