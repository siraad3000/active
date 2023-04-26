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

export const getOneUsersChallenges = async (
  x: string
): Promise<Challenge[]> => {
  const mongoClient = await clientPromise
  const challenges = (await mongoClient
    .db("active")
    .collection("challenges")
    .find({ title: x })
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
  if (req.method === "POST") {
    const newChallenge = req.body as Challenge
    const createdChallenge = await addChallenge(newChallenge)
    res.status(201).json(createdChallenge)
  } else if (req.method === "GET") {
    const { username } = req.query
    console.log("in i get ")
    if (username) {
      console.log("in i username")
      const challenges = await getOneUsersChallenges(username as string)
      res.status(200).json(challenges)
    } else {
      const challenges = await getChallenges()
      res.status(200).json(challenges)
    }
  } else {
    res.status(405).end()
  }
}
export default challengesHandler
