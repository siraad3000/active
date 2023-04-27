import Image from "next/image";
import Avatar from "./UserAvatar";
import { useSession, signOut } from "next-auth/react";
import router from "next/router";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="fixed top-0 flex items-end w-full h-24 border-t border-gray-200 bg-active-white z-10">
      <div className="w-1/4 pl-2"></div>
      <div className="flex justify-center mb-5 w-full">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/active-logo-medium.png"}
            alt={"#"}
            width={"120"}
            height={"120"}
          />
        </div>
        <div
          className=" w-1/4 flex justify-end cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          <Avatar
            src={session?.user?.image}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
