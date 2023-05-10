import { signOut } from "next-auth/react";
import { useState } from "react";

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const Menu = () => (
    <div
      id="dropdown"
      className="z-10 mt-7 p-1 bg-active-offWHite absolute right-0 rounded-sm shadow-lg  w-36 dark:bg-gray-700 flex justify-center lg:w-80 "
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
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Placeholder
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-3 font-bold">
            Redigera profil
          </a>
        </li>
        <li>
          <div
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
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
        } else setShowMenu(true);
      }}
    >
      <svg width="24" height="24" fill="none">
        <path
          stroke="#611087"
          stroke-linecap="round"
          d="M5 7h14M5 12h10M5 17h6"
        />
      </svg>
      {showMenu ? <Menu /> : null}
    </div>
  );
}
