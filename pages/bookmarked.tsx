import DisplayChallenges from "@/components/DisplayChallenges";
import FooterNavbar from "@/components/FooterNavbar";
import clientPromise from "@/lib/mongodb";
import { GetSessionParams, getSession, useSession } from "next-auth/react";
import { Challenge } from "@/types/challengeTemp";
import HeaderLarge from "@/components/largeHeader";

interface Props {
  challenges: Challenge[];
}

const Bookmarked = ({ challenges }: Props) => {
  const { data: session } = useSession();
  return (
    <div className="h-screen w-screen bg-active-offWHite ">
      <main className="bg-active-offWHite">
        <HeaderLarge
          valueOne="Bokade"
          valueTwo="Sparade"
          valueTwoLink="/bookmarked"
          valueOneLink="/aktiviteter"
        />

        <div className="lg:flex justify-center p-5 h-full bg-active-offWHite">
          <DisplayChallenges challenges={challenges} className="pb-14 pt-32" />
        </div>
        <FooterNavbar />
      </main>
    </div>
  );
};

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
    .find({ marked: session?.user?.id })
    .toArray();

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge;
    return { ...rest, _id: _id.toString() };
  });
  console.log("guego" + session);
  return { props: { challenges: serializedChallenges } };
}

export default Bookmarked;
