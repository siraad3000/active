import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { Users } from "../../types/usersTemp";

export const getUsers = async (): Promise<Users[]> => {
  const mongoClient = await clientPromise;
  const users = (await mongoClient
    .db("active")
    .collection("users")
    .find()
    .toArray()) as Users[];
  return users;
};
export const verifyUser = async (email: string): Promise<Users[]> => {
  const mongoClient = await clientPromise;
  const users = (await mongoClient
    .db("active")
    .collection("users")
    .find({ email: email })
    .toArray()) as Users[];
  return users;
};

export const addUsers = async (users: Users): Promise<ObjectId> => {
  const mongoClient = await clientPromise;

  const response = await mongoClient
    .db("active")
    .collection("users")
    .insertOne(users);

  return response.insertedId;
};

export const usersHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const newUsers = req.body as Users;
    const createdUser = await addUsers(newUsers);
    res.status(201).json(createdUser);
  } else if (req.method === "GET") {
    const Users = await getUsers();
    res.status(200).json(Users);
  } else {
    res.status(405).end();
  }
};
export default usersHandler;
