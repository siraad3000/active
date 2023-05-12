import Image from "next/image";
import ProfileMenu from "./ProfileMenu";
import BackButton from "./BackButton";
export default function Profileheader() {
  return (
    <header className="fixed top-0 flex items-end w-full h-24 border-t border-gray-200 bg-active-white shadow-md z-40">
      <div className="flex justify-center mb-5 w-full items-end">
        <div className=" w-1/4 flex justify-start space-x-3 ml-3">
          <BackButton />
        </div>
        <div className="w-1/2 h-1/2 flex justify-center">
          <Image
            src={"/active-logo-medium.png"}
            alt={"#"}
            width={"120"}
            height={"120"}
          />
        </div>
        <div className=" w-1/4 pr-4 flex justify-end cursor">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
