import { Challenge } from "@/types/challengeTemp"
import { ObjectId } from "mongodb"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

interface Props {
  challenge: Challenge
}

export default function Bookmark({ challenge }: Props): JSX.Element {
  const [bookmarkIcon, setBookmarkIcon] = useState<string>(
    "/Bookmark-Icon-Yellow-unfilled.png"
  )
  function handleBookmark(cardId: ObjectId | undefined, userId: string) {
    console.log("add book mark")
    addBookmark(cardId, userId)
      .then(() => {
        console.log("Mark added to challenge!")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const { data: session, status } = useSession()

  async function addBookmark(cardId: ObjectId | undefined, userId: string) {
    const response = await fetch(`/api/hello?id=${cardId}&userId=${userId}`, {
      method: "PUT",
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }
  }
  let markedEvent = false
  challenge.marked?.map((mark) => {
    if (session?.user.id == mark) {
      markedEvent = true
    }
  })
  if (!markedEvent) {
    return (
      <div
        className="mt-4"
        id={"marked_" + challenge._id}
        onClick={(e) => {
          e.stopPropagation()
          if (bookmarkIcon != "/Bookmark-Icon-Filled-Yellow.png") {
            handleBookmark(challenge._id, session?.user.id)
            setBookmarkIcon("/Bookmark-Icon-Filled-Yellow.png")
          }
        }}
      >
        <Image
          id="book"
          src={bookmarkIcon}
          alt="Avatar"
          width={30}
          height={30}
        />
      </div>
    )
  } else {
    return (
      <div className="mt-4">
        <Image
          id="book"
          src="/Bookmark-Icon-Filled-Yellow.png"
          alt="Avatar"
          width={30}
          height={30}
        />
      </div>
    )
  }
}
