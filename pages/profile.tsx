import { NextPage } from "next"
import Header from "../components/Header"
import { Users } from "../types/usersTemp"
import FooterNavbar from "../components/FooterNavbar"
import Avatar from "../components/UserAvatar"
import { useEffect, useState } from "react"
import Profileheader from "@/components/Headerprofile"
interface Props {}

const Profile = () => {
  const [users, setUsers] = useState<Users[]>([])
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users")
      const data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])
  return (
    
    <div className="  flex-wrap bg-active-offWHite h-screen ">
    
      <Profileheader />
      <div className="bg-active-white mt-24 ">
        <div className="bg-active-purple h-40">
          <img src="profileback.jpg" alt="" className="w-full h-full" />
        </div>
        <div className="mx-3">
          <div>
            <div className="z-10 h-10 w-10">
              <Avatar />
            </div>
            <p className="text-lg leading-6 font-bold">{users[2]?.name}</p>
            <p>{users[2]?.location}</p>
            <div className="h-10 mt-4 "> Här kommer bilder sen</div>
            <div>
              <p>{users[2]?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-active-purple mt-3 flex absolute left-2 font-extrabold font-['Urbanist']"> Mina skapade aktiviteter</div>
      <div className=" flex absolute right-2  mt-3 font-[Urbanist]"> Redigera</div>
      
      <div className="flex absolute mt-12 left-2 font-[Urbanist]">Idag</div>
    </div>
  )
}

export default Profile
