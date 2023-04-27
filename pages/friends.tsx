import { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import { Users } from "../types/usersTemp"
import { useEffect, useState } from "react"
import FooterNavbar from "../components/FooterNavbar"
import Header from "../components/Header"

const Friends = () => {
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
    <div>
      <Header />
      <div className="friends">
        <p>{users[0]?.friends[0]}</p>
        <hr />
        <p>{users[0]?.friends[1]}</p>
        <hr />
        <p>{users[0]?.friends[2]}</p>
        <hr />
      </div>

      <FooterNavbar />
    </div>
  )
}

export default Friends
