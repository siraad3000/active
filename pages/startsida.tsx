import Head from "next/head";
import { useEffect, useState } from "react";
import { Challenge } from "@/types/challengeTemp";
import DisplayChallenges from "../components/DisplayChallenges";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import ChallengeForm from "../components/ChallengeForm";
import clientPromise from "@/lib/mongodb";
import { getSession, GetSessionParams } from "next-auth/react";

interface Props {
  challenges: Challenge[];
}

function Startsida({ challenges }: Props) {
  const [challengeList, setChallengeList] = useState<Challenge[]>(challenges);

  const handleChallengeSubmit = async (challenge: Challenge) => {
    const res = await fetch("/api/challenges", {
      method: "POST",
      body: JSON.stringify(challenge),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setChallengeList([challenge, ...challengeList]);
  };

  return (
    <div>
      <Head>
        <title>Active-startsida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Activeicon.ico" />
      </Head>
      <main className="">
        <Header />
        {/* challenge form component */}
        <ChallengeForm onSubmit={handleChallengeSubmit} />
        {/* Display challenges component */}
        <DisplayChallenges challenges={challengeList} />
        <div id="footer">
          <FooterNavbar />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const mongoClient = await clientPromise;
  const challenges = await mongoClient
    .db("active")
    .collection("challenges")
    .find()
    .toArray();

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge;
    return { ...rest, _id: _id.toString() };
  });

  return { props: { challenges: serializedChallenges } };
}
export default Startsida;
