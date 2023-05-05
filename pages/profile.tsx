import Image from "next/image"
import Avatar from "../components/UserAvatar"
import Profileheader from "@/components/Headerprofile"
import { GetSessionParams, getSession, useSession } from "next-auth/react"
import clientPromise from "@/lib/mongodb"
import { Challenge } from "@/types/challengeTemp"
import { User } from "next-auth"
import { useEffect, useState } from "react"
import challenges from "./api/challenges"
import DisplayChallenges from "@/components/DisplayChallenges"
import { Session } from "inspector"

interface Props {
  challenges: Challenge[]
}

const Profile = ({ challenges }: Props) => {
  const { data: session } = useSession()

  return (
    <div className="flex-wrap bg-active-offWHite h-screen">
      <Profileheader />
      <div className="lg:flex justify-center shadow-lg h-full">
        <div className="lg:w-1/2">
          <div className="bg-active-white mt-24 shadow-lg">
            <div>
              <Image
                src="/profileback.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
              />
              <div className="px-4 relative bottom-11">
                <Avatar
                  width={80}
                  height={80}
                  alt=""
                  className="rounded-full"
                />
                <div className="font-[Inter] text-xl text-active-purple pt-2 ">
                  {session?.user?.name}
                </div>
              </div>
            </div>
            <div className="p-2 ">
              <div className="font-[Inter] text-xl text-active-purple">
                {session?.user?.name}
              </div>
              <div className=" mt-4 flex space-x-6"> 
              <Image
                      src="/pingis.svg"
                      alt="Avatar"
                      width={80}
                      height={80}
                    />
                      <Image
                      src="/simning.svg"
                      alt="Avatar"
                      width={80}
                      height={60}
                    />
            
              </div>
            </div>
          </div>
          <div className="bg-active-offWHite px-4 lg:shadow-lg">
            <div className="flex items-center justify-between py-3">
              <p className="text-active-purple font-extrabold">
                Mina skapade aktiviteter
              </p>
              <p>Redigera</p>
            </div>
            <DisplayChallenges challenges={challenges} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
  const mongoClient = await clientPromise
  const challenges = await mongoClient
    .db("active")
    .collection("challenges")
    .find({ idPublisher: session?.user?.id })
    .toArray()

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge
    return { ...rest, _id: _id.toString() }
  })
  console.log("guego" + session)
  return { props: { challenges: serializedChallenges } }
}

export default Profile
