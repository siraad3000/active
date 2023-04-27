import { Challenge } from "@/types/challengeTemp";
import Image from "next/image";
import Avatar from "./UserAvatar";

interface Props {
  challenges: Challenge[];
}

export default function DisplayChallenges({ challenges }: Props): JSX.Element {
  return (
    <div id="cards" className="mb-20 mt-32">
      {challenges.map((challenge) => (
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
                <p className="text-active-purple mb-2 text-2xl font-extrabold break-words font-['Inter']">
                  {challenge.title}
                </p>
                <div className="flex mb-3">
                  <Avatar
                    src=""
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
                      src="/location-pin-small.png"
                      alt="Avatar"
                      width={15}
                      height={15}
                    />
                  </span>
                  {challenge.location}
                </p>
                <p>
                  <span className="inline-flex mr-2">
                    <Image
                      src="/Clock-icon-small.png"
                      alt="Avatar"
                      width={15}
                      height={15}
                    />
                  </span>
                  {challenge.time}
                </p>
              </div>

              <div id={`description_${challenge._id}`} className="hidden mt-3">
                <div className="w-4/5 break-words my-3">
                  <h3 className="text-sm text-active-purple font-bold mb-1">
                    Beskrivning:
                  </h3>
                  <p className="text-xs ">{challenge.description}</p>
                </div>

                <button
                  className="w-full h-1/6 rounded mt-2 bg-active-purple text-active-white font-['Inter'] p-2"
                  disabled
                >
                  Skicka förfrågan
                </button>
              </div>
            </div>
            <div className=" w-2/12 right-0 flex justify-center">
              <div></div>
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
      ))}
    </div>
  );
}
