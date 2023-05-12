import { signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuIcon, setMenuIcon] = useState<string>("/Menu_icon_purple.png");
  const Menu = () => (
    <div
      id="dropdown"
      className="z-10 mt-5 p-1 bg-active-offWHite absolute right-0 rounded-sm shadow-lg  w-36 dark:bg-gray-700 flex justify-center lg:w-80 "
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200 lg:text-xl "
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Placeholder
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Placeholder
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Placeholder
          </a>
        </li>
        <li>
          <div
            onClick={() =>
              signOut({ callbackUrl: "https://active-q5ec.vercel.app" })
            }
            className="px-4 py-3 font-bold"
          >
            Logga ut
          </div>
        </li>
      </ul>
    </div>
  );
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        if (showMenu) {
          setShowMenu(false);
          setMenuIcon("/Menu_Icon_Purple.png");
        } else {
          setShowMenu(true);
          setMenuIcon("/More_Icon_Purple.png");
        }
      }}
    >
      <div>
        <Image src={menuIcon} alt={"meny"} width={30} height={30} />
      </div>

      {showMenu ? <Menu /> : null}
    </div>
  );
}
