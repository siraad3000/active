import Image from "next/image"
import { User } from "../types/userTemp"
import Avatar from "../components/UserAvatar"
import { useEffect, useState } from "react"
import Profileheader from "@/components/Headerprofile"
import { GetSessionParams, getSession, useSession } from "next-auth/react"
import clientPromise from "@/lib/mongodb"
import DisplayChallenges from "@/components/DisplayChallenges"
import challenges from "./api/challenges"
import { Challenge } from "@/types/challengeTemp"

interface Props {
  challenges: Challenge[]
}

const Profile = ({ challenges }: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const { data: session } = useSession()
  const [challengeList, setChallengeList] = useState<Challenge[]>(challenges)

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users")
      const data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])
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
              <div className="px-4 relative bottom-10">
                <Avatar
                  width={80}
                  height={80}
                  alt=""
                  className="rounded-full"
                  src={session?.user?.image}
                />
              </div>
            </div>
            <div className="p-4 ">
              <div>
                <div>
                  <div>
                    <p className="text-lg leading-6 font-bold">
                      {session?.user?.name}
                    </p>
                    <p>{users[2]?.location}</p>
                    <div className="h-10 mt-4 "> Här kommer bilder sen</div>
                  </div>

                  <div>
                    <p>{users[2]?.description}</p>
                  </div>
                </div>
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

            <div className="mt-5">Idag</div>
          </div>
        </div>
        <DisplayChallenges challenges={challenges} />
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
    .find({ idPublisher: session?.user?._id })
    .toArray()

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge
    return { ...rest, _id: _id.toString() }
  })
  console.log("guego" + session)
  return { props: { challenges: serializedChallenges } }
}
export default Profile
