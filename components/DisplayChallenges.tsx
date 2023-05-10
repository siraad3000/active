import { Challenge } from "@/types/challengeTemp";
import Image from "next/image";
import Avatar from "./UserAvatar";
import { test } from "node:test";
import { useSession } from "next-auth/react";
import { ObjectId } from "mongodb";
import { error } from "console";


interface Props {
  challenges: Challenge[];
  className: string;
}
export default function DisplayChallenges({
  challenges,
  className,
}: Props): JSX.Element {


  function handleAttende(cardId: ObjectId|undefined, userId: string){
    addAttendeeToChallenge(cardId, userId)
    .then(() => {
      console.log('Attendee added to challenge!');
    })
    .catch((error) => {
      console.error(error);
    });
    

  }
  const { data: session, status } = useSession()
 
  async function addAttendeeToChallenge(cardId: ObjectId|undefined, userId: string) {
    const response = await fetch(`/api/challenges?id=${cardId}&userId=${userId}`, {
      method: 'PUT',
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  }

  return (
    <div id="cards" className={className}>
      {challenges.map((challenge) => {
        const challengeDate = new Date(challenge.date);
        const options: Intl.DateTimeFormatOptions = {
          month: "long",
          day: "numeric",
        };
        const formattedDate = challengeDate.toLocaleString("sv-SE", options);
        return (
          <div
            className="flex justify-center items-center m-5 relative w-auto"
            key={challenge._id?.toString()}
          >
            <div
              id={`challengeCard_${challenge._id}`}
              onClick={() => {
                const challengeCard = document.getElementById(
                  `challengeCard_${challenge._id}`
                );
                const description = document.getElementById(
                  `description_${challenge._id}`
                );
                const arrowIcon = document.getElementById(
                  `arrowIcon_${challenge._id}`
                );

                if (description && challengeCard && arrowIcon) {
                  if ((description.style.display = "none")) {
                    description.style.display = "block";
                    challengeCard.style.cursor = "auto";
                    arrowIcon.classList.add("rotate-180");
                  }
                }
              }}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg flex cards-size cursor-pointer bg-active-white"
            >
              <div className="p-5 w-10/12 flex-col">
                <div id="content" className="flex-col">
                  <p className="text-active-purple mb-4 text-2xl font-extrabold break-words font-['Inter']">
                    {challenge.title}
                  </p>
                  <div className="flex mb-3">
                    <Avatar
                      src={challenge.idpicture}
                      alt="avatar"
                      width={30}
                      height={30}
                      className="rounded-full mr-2"
                    />
                    <p className=" text-lg ">{challenge.publisher}</p>
                  </div>
                  <p className="w-4/5 break-words">
                    <span className="inline-flex mr-2">
                      <Image
                        src="/location-pin-small-svg.svg"
                        alt="Avatar"
                        width={15}
                        height={15}
                      />
                    </span>
                    {challenge.location}
                  </p>
                  <p className="flex items-center">
                    <Image
                      src="/clock-icon-small-svg.svg"
                      alt="Avatar"
                      width={15}
                      height={15}
                    />
                    <span className="mx-2">{challenge.time}</span>
                  </p>
                </div>

                <div
                  id={`description_${challenge._id}`}
                  className="hidden mt-3"
                >
                  <p className="flex items-center">
                    <span className="inline-flex mr-2">
                      <Image
                        src="/Calendar-Icon-svg.svg"
                        alt="Avatar"
                        width={15}
                        height={15}
                      />
                    </span>
                    {formattedDate}
                  </p>
                  <div className="w-4/5 break-words my-3">
                    <h3 className="text-sm text-active-purple font-bold mb-1">
                      Beskrivning:
                    </h3>
                    <p className="text-xs ">{challenge.description}</p>
                  </div>

                  <button id= {"attende_" + challenge._id}
                    className="w-full h-1/6 rounded mt-2 bg-active-purple text-active-white font-['Inter'] p-2"
                    onClick= {()=> 
                   {
                       const deltabutton = document.getElementById(`attende_${challenge._id}`)
                       if( deltabutton 
                        

                       ){
                        deltabutton.style.display="none"
                       
                       }
                       
                      
                       handleAttende(challenge._id, session?.user.id)} }
                  >
                    Delta
                  </button>
                </div>
              </div>
              <div className=" w-2/12 right-0 flex justify-center">
                <div className="mt-4">
                  <Image
                    src="/Bookmark-Icon-Yellow-unfilled.png"
                    alt="Avatar"
                    width={30}
                    height={30}
                  />
                </div>
                <div
                  className="absolute bottom-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const description = document.getElementById(
                      `description_${challenge._id}`
                    );
                    const challengeCard = document.getElementById(
                      `challengeCard_${challenge._id}`
                    );
                    const arrowIcon = document.getElementById(
                      `arrowIcon_${challenge._id}`
                    );

                    if (description && challengeCard && arrowIcon) {
                      if ((description.style.display = "block")) {
                        description.style.display = "none";
                        challengeCard.style.cursor = "pointer";
                        arrowIcon.classList.remove("rotate-180");
                      }
                    }
                  }}
                >
                  <Image
                    id={`arrowIcon_${challenge._id}`}
                    className="mb-4"
                    src="/down-arrow.png"
                    alt="Avatar"
                    width={17}
                    height={17}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
