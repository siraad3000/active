import Image from "next/image"
import Avatar from "./UserAvatar"
import { useSession } from "next-auth/react"
import router from "next/router"
import BackButton from "./BackButton"
import HideForm from "./HideForm"

interface Props {
  valueOne: string
  valueTwo: string
}

export default function HeaderLarge({ valueOne, valueTwo }: Props) {
  const { data: session } = useSession()

  return (
    <div>
      <header className="fixed top-0 flex  items-end w-full h-24 border-t border-gray-200 bg-active-white z-50">
        <div className="flex justify-center mb-5 w-full items-end">
          <div className="w-1/4 h-1/2">
            <div className=" pl-4 flex space-x-3 justify-start items-end">
              <Image src="/notice.svg" alt="Avatar" width={25} height={25} />

              <Image src="/search.svg" alt="Avatar" width={25} height={25} />
            </div>
          </div>

          <div className="w-1/2 h-1/2 flex justify-center">
            <Image
              src={"/active-logo-medium.png"}
              alt={"#"}
              width={"120"}
              height={"120"}
            />
          </div>
          <div
            className=" w-1/4 h-1/2 pr-4 flex justify-end cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <Avatar
              src={session?.user?.image}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </header>
      <div className="fixed w-full lg:flex justify-center shadow-md z-40 bg-active-white">
        <div className="pt-28 flex justify-center lg:w-1/2 shadow-lg">
          <div className="w-1/2 flex justify-center border-b-2 border-active-purple font-bold  ">
            {valueOne}
          </div>
          <div className=" w-1/2 flex justify-center  ">{valueTwo}</div>
        </div>
      </div>
    </div>
  )
}
