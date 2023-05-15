import Image from "next/image";
import Link from "next/link";
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
      location.pathname === "/aktiviteter" ||
      location.pathname === "/bookmarked"
        ? setActivityIcon("/Activity_Icon_Filled.png")
        : setActivityIcon("/Activity_Icon.png");
      location.pathname === "/friends"
        ? setFriendsIcon("/Friends_Icon_Filled.png")
        : setFriendsIcon("/Friends_Icon.png");
    }
  }, []);
  return (
    <footer className=" z-40 boxshadow fixed bottom-0  flex justify-center w-full h-16 bg-active-white">
      <Link
        href="/startsida"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <Image src={homePageIcon} alt="Homepage icon" width={25} height={25} />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Hem
        </p>
      </Link>
      <Link
        href="/aktiviteter"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <Image
          src={activityIcon}
          alt="joined activity icon"
          width={25}
          height={25}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Aktiviteter
        </p>
      </Link>
      <Link
        href="/friends"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <Image src={friendsIcon} alt="friends icon" width={25} height={25} />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Vänner
        </p>
      </Link>
    </footer>
  );
}
