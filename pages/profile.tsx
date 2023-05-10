import Image from "next/image";
import Avatar from "../components/UserAvatar";
import Profileheader from "@/components/Headerprofile";
import { GetSessionParams, getSession, useSession } from "next-auth/react";
import clientPromise from "@/lib/mongodb";
import { Challenge } from "@/types/challengeTemp";
import DisplayChallenges from "@/components/DisplayChallenges";

interface Props {
  challenges: Challenge[];
}

const Profile = ({ challenges }: Props) => {
  const { data: session } = useSession();

  return (
    <div className="flex-wrap bg-active-offWHite ">
      <Profileheader />
      <div className="lg:flex justify-center shadow-lg ">
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
                  className="rounded-full border border-active-black"
                />
                <div className=" absolute right-2 top-12">
                  <Image src="/penna.svg" alt="Avatar" width={25} height={10} />
                </div>
                <p className="font-[Inter] text-xl text-active-purple pt-2 flex justify-between ">
                  {session?.user?.name}
                </p>
                <div className="flex justify-between">
                  <p>999 år, Stockholm </p>
                </div>
                <div className="pt-2 font-[Inter] text-base text-active-purple  ">
                  <p>Mina Träningsintressen</p>
                  <div className=" mt-2 flex space-x-6">
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

                <p className="pt-2">
                  Jag gillar spela pingis och jag gillar äta kebab och jag
                  gillar inte simma och jag gillar tennis sen gillar inte att
                  handla men jag tycker det roligt att spela men annars så vet
                  jag inte vad jag skriver hallooooooooooooo
                </p>
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
            <DisplayChallenges challenges={challenges} className="pb-10" />
          </div>
        </div>
      </div>
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
    .find({ idPublisher: session?.user?.id })
    .toArray();

  const serializedChallenges = challenges.map((challenge) => {
    const { _id, ...rest } = challenge;
    return { ...rest, _id: _id.toString() };
  });
  console.log("guego" + session);
  return { props: { challenges: serializedChallenges } };
}

export default Profile;
