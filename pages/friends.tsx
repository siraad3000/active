import { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"

import { useEffect, useState } from "react"
import FooterNavbar from "../components/FooterNavbar"
import Header from "../components/Header"
import Avatar from "@/components/UserAvatar"

const Friends = () => {
  return (
    <div className=" bg-active-white min-h-screen friends">
      <div className="-mt-6">
        <Header />
        <div className=" text-lg"></div>
        <div className="v">Vänner</div>
        <div className="g">Grupper</div>
      </div>

      <FooterNavbar />
    </div>
  )
}

export default Friends
