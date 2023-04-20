import { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import { Users } from "../types/usersTemp"
import { useEffect, useState } from "react"

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
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default Friends
