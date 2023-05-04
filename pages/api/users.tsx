import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { User, newUser } from "../../types/userTemp";

export const getUsers = async (): Promise<User[]> => {
  const mongoClient = await clientPromise;
  const users = (await mongoClient
    .db("active")
    .collection("users")
    .find()
    .toArray()) as User[];
  return users;
};
export const verifyUser = async (email: string): Promise<User[]> => {
  const mongoClient = await clientPromise;
  const users = (await mongoClient
    .db("active")
    .collection("users")
    .find({ email: email })
    .toArray()) as User[];
  return users;
};

export const addUsers = async (newUser: newUser): Promise<ObjectId> => {
  const mongoClient = await clientPromise;

  const response = await mongoClient
    .db("active")
    .collection("users")
    .insertOne(newUser);

  return response.insertedId;
};

export const userHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const newUser = req.body as newUser;
    const createdUser = await addUsers(newUser);
    res.status(201).json(createdUser);
  } else if (req.method === "GET") {
    
  } else {
    res.status(405).end();
  }
};
export default userHandler;
