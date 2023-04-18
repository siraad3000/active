import Image from "next/image";
import Avatar from "./UserAvatar";
export default function Header() {
  return (
    <header className="fixed top-0 flex justify-center w-full h-24 border-t border-gray-200 bg-active-white z-10">
      <div className="flex justify-center items-end mb-5 w-full">
        <div className="mx-auto">
          <Image
            src={"/active-logo-medium.png"}
            alt={"#"}
            width={"120"}
            height={"120"}
          />
        </div>
        <Avatar />
      </div>
    </header>
  );
}
