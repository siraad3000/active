import DisplayChallenges from "@/components/DisplayChallenges"
import FooterNavbar from "@/components/FooterNavbar"
import Header from "@/components/Header"
import clientPromise from "@/lib/mongodb"
import { GetSessionParams, getSession, useSession } from "next-auth/react"
import challenges from "./api/challenges"
import { Challenge } from "@/types/challengeTemp"
import HeaderAktiviter from "@/components/headerAttending"

interface Props {
  challenges: Challenge[]
}

const Aktiviteter = ({ challenges }: Props) => {
  const { data: session } = useSession()
  return (
    <div className="h-screen w-screen bg-active-offWHite ">
      <main>
        <HeaderAktiviter />

        <div className="lg:flex justify-center p-5">
          <DisplayChallenges challenges={challenges} className="pb-6 pt-32" />
        </div>
        <FooterNavbar />
      </main>
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
    .find({ attending: session?.user?.id })
    .toArray()

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge
    return { ...rest, _id: _id.toString() }
  })
  console.log("guego" + session)
  return { props: { challenges: serializedChallenges } }
}

export default Aktiviteter
