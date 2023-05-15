import { Challenge } from "@/types/challengeTemp";
import { ObjectId } from "mongodb";
interface Props {
  challenge: Challenge;
}

export default function DeleteButton({ challenge }: Props): JSX.Element {
  function deleteChallenge(cardId: ObjectId | undefined) {
    addAttendeeToChallenge(cardId)
      .then(() => {
        console.log("Post deleted!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function addAttendeeToChallenge(cardId: ObjectId | undefined) {
    const response = await fetch(`/api/challenges?id=${cardId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  }

  return (
    <button
      id={"delete_" + challenge._id}
      className="w-full h-1/6 rounded mt-2 bg-active-purple text-active-white font-['Inter'] p-2"
      onClick={() => {
        deleteChallenge(challenge._id);
      }}
    >
      Avboka!
    </button>
  );
}
