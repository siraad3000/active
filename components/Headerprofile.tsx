import Image from "next/image";
import ProfileMenu from "./ProfileMenu";
import BackButton from "./BackButton";
export default function Profileheader() {
  return (
    <header className="fixed top-0 flex items-end w-full h-24 border-t border-gray-200 bg-active-white z-10">
      <div className="flex justify-center mb-5 w-full">
        <div className=" w-1/4 pl-2">
          <BackButton />
        </div>
        <div className=" w-1/2 flex justify-center">
          <Image
            src={"/active-logo-medium.png"}
            alt={"#"}
            width={"120"}
            height={"120"}
          />
        </div>
        <div className=" w-1/4 pr-2 flex justify-end">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
