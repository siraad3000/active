import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { challenge } from "../../types/challengeTemp";

export const getChallenges = async (): Promise<challenge[]> => {
  const mongoClient = await clientPromise;
  const challenges = (await mongoClient
    .db("active")
    .collection("challenges")
    .find()
    .toArray()) as challenge[];
  return challenges;
};

export const addChallenge = async (challenge: challenge): Promise<ObjectId> => {
  const mongoClient = await clientPromise;

  const response = await mongoClient
    .db("active")
    .collection("challenges")
    .insertOne(challenge);
  
  return response.insertedId;
};

export const challengesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const newChallenge = req.body as challenge;
    const createdChallenge = await addChallenge(newChallenge);
    res.status(201).json(createdChallenge);
  } else if (req.method === "GET") {
    const challenges = await getChallenges();
    res.status(200).json(challenges);
  } else {
    res.status(405).end();
  }
};
export default challengesHandler;
