import Link from "next/link";
import Image from "next/image";
import router from "next/router";

export default function FooterNavbar() {
  const homeIconSrc =
    location.pathname === "/startsida"
      ? "/Home_Icon_Filled.png"
      : "/Home_Icon.png";
  const activityIconSrc =
    location.pathname === "/aktiviteter"
      ? "/Activity_Icon_Filled.png"
      : "/Activity_Icon.png";
  const friendsIconSrc =
    location.pathname === "/friends"
      ? "/Friends_Icon_Filled.png"
      : "/Friends_icon.png";
  return (
    <footer className="boxshadow fixed bottom-0  flex justify-center w-full h-16 bg-active-white">
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onClick={() => router.push("/startsida")}
      >
        <Image src={homeIconSrc} alt="Homepage icon" width={25} height={25} />
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
        <Image src={friendsIconSrc} alt="friends icon" width={25} height={25} />
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">
          Vänner
        </p>
      </button>
    </footer>
  );
}
