import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { challenge } from "../../types/challengeTemp";

type Return = {
  challenges: challenge[];
};

const getChallenges = async () => {
  const mongoClient = await clientPromise;
  const challenges = await mongoClient
    .db("active")
    .collection("challenges")
    .find()
    .toArray();
  return challenges;
};
const challengesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const challenges = await getChallenges();
  res.status(200).json(challenges);
};
export default challengesHandler;
