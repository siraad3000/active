import { NextPage } from "next"
import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect, useState } from "react"
import FooterNavbar from "../components/FooterNavbar"
import Header from "../components/Header"
import HeaderLarge from "@/components/largeHeader"
import Avatar from "@/components/UserAvatar"

const Friends = () => {
  return (
    <div className="h-screen w-screen bg-active-white ">
      <main>
        <HeaderLarge valueOne="Vänner" valueTwo="Grupper" />
        <div className="w-full lg:flex justify-center">
          <div className="lg:w-1/2 pt-36 w-full">
            <div className=" w-full p-2 flex justify-between items-center bg-active border-b">
              <div className="flex pl-2 items-center">
                <Avatar
                  width={40}
                  height={40}
                  alt=""
                  src={"/Lollo-profile-pic.png"}
                  className="rounded-full border border-active-black"
                />
                <p className="pl-2">Louise Thamma</p>
              </div>

              <Image src="/more-icon.png" alt="Avatar" width={24} height={24} />
            </div>
            <div className="p-2 flex justify-between items-center bg-active border-b">
              <div className="flex pl-2 items-center">
                <Avatar
                  width={40}
                  height={40}
                  alt=""
                  src={"/Axel-bild.jpg"}
                  className="rounded-full border border-active-black"
                />
                <p className="pl-2">Axel Johnson </p>
              </div>

              <Image src="/more-icon.png" alt="Avatar" width={24} height={24} />
            </div>
            <div className="p-2 flex justify-between items-center bg-active border-b">
              <div className="flex pl-2 items-center">
                <Avatar
                  width={40}
                  height={40}
                  alt=""
                  src={"/Sara-bild.png"}
                  className="rounded-full border border-active-black"
                />
                <p className="pl-2">Sara Sundin</p>
              </div>

              <Image src="/more-icon.png" alt="Avatar" width={24} height={24} />
            </div>
            <div className="p-2 flex justify-between items-center bg-active border-b">
              <div className="flex pl-2 items-center">
                <Avatar
                  width={40}
                  height={40}
                  alt=""
                  src={"/Claudia-bild.jpg"}
                  className="rounded-full border border-active-black"
                />
                <p className="pl-2">Claudia Kjerrgren</p>
              </div>
              <Image src="/more-icon.png" alt="Avatar" width={24} height={24} />
            </div>
          </div>
        </div>
        <FooterNavbar />
      </main>
    </div>
  )
}

export default Friends
