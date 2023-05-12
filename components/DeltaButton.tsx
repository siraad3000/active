import { Challenge } from "@/types/challengeTemp"
import { ObjectId } from "mongodb"
import { useSession } from "next-auth/react"

interface Props {
  challenge: Challenge
  className: string
}

export default function AttendeeButton({
  challenge,
  className,
}: Props): JSX.Element {
  function handleAttende(cardId: ObjectId | undefined, userId: string) {
    addAttendeeToChallenge(cardId, userId)
      .then(() => {
        console.log("Attendee added to challenge!")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const { data: session, status } = useSession()

  async function addAttendeeToChallenge(
    cardId: ObjectId | undefined,
    userId: string
  ) {
    const response = await fetch(
      `/api/challenges?id=${cardId}&userId=${userId}`,
      {
        method: "PUT",
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }
  }
  let attendingEvent = false
  challenge.attending?.map((attendee) => {
    if (session?.user.id == attendee) {
      attendingEvent = true
    }
  })
  if (attendingEvent) {
    return <div></div>
  } else {
    return (
      <button
        id={"attende_" + challenge._id}
        className="w-full h-1/6 rounded mt-2 bg-active-purple text-active-white font-['Inter'] p-2"
        onClick={() => {
          const deltabutton = document.getElementById(
            `attende_${challenge._id}`
          )
          if (deltabutton) {
            deltabutton.style.display = "none"
          }

          handleAttende(challenge._id, session?.user.id)
        }}
      >
        Häng på!
      </button>
    )
  }
}
