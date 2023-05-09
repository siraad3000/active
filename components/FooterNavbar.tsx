import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";

export default function FooterNavbar() {
  const [homePageIcon, setHomePageIcon] = useState<string>("/Home_Icon.png");
  const [activityIcon, setActivityIcon] =
    useState<string>("/Activity_Icon.png");
  const [friendsIcon, setFriendsIcon] = useState<string>("/Friends_icon.png");
  useEffect(() => {
    if (typeof window !== "undefined") {
      location.pathname === "/startsida"
        ? setHomePageIcon("/Home_Icon_Filled.png")
        : setHomePageIcon("/Home_Icon.png");
      location.pathname === "/aktiviteter"
        ? setActivityIcon("/Activity_Icon_Filled.png")
        : setActivityIcon("/Activity_Icon.png");
      location.pathname === "/friends"
        ? setFriendsIcon("/Friends_Icon_Filled.png")
        : setFriendsIcon("/Friends_icon.png");
    }
  }, []);
  return (
    <footer className="boxshadow fixed bottom-0  flex justify-center w-full h-16 bg-active-white">
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onClick={() => router.push("/startsida")}
      >
        <Image src={homePageIcon} alt="Homepage icon" width={25} height={25} />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Hem
        </p>
      </button>
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <Image
          src="/Activity_icon.png"
          alt="joined activity icon"
          width={25}
          height={25}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Aktiviteter
        </p>
      </button>
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onClick={() => router.push("/friends")}
      >
        <Image src={friendsIcon} alt="friends icon" width={25} height={25} />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Vänner
        </p>
      </button>
    </footer>
  );
}
