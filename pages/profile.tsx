import Image from "next/image";

import Avatar from "../components/UserAvatar";
import Profileheader from "@/components/Headerprofile";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);

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
                />
              </div>
            </div>
            <div className="p-2 ">
              <div className="font-[Inter] text-xl text-active-purple">
                {session?.user?.name}
              </div>
              <div className="h-10 mt-4 "> Här kommer bilder sen</div>
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
      </div>
    </div>
  );
};

export default Profile;
