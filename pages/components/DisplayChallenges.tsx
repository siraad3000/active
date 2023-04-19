import { Challenge } from "@/types/challengeTemp";
import Image from "next/image";

interface Props {
  challenges: Challenge[];
}
const DisplayChallenges = ({ challenges }: Props) => {
  return (
    <div id="cards" className=" mb-20">
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
            <div className="w-14 flex-shrink-0 m-2">
              <Image
                src="/user-avatar.png"
                alt="Avatar"
                width={50}
                height={50}
              />
            </div>
            <div className="py-4 w-4/5 flex-col items-center">
              <p className="text-urbanist text-black-700 text-lg body-font font-Urbanist">
                {challenge.publisher}
              </p>
              <p className="text-purp text-xl font-extrabold body-font font-Inter">
                {challenge.title}
              </p>
              <p>
                <span className="inline-flex mr-2">
                  <Image
                    src="/location-pin.png"
                    alt="Avatar"
                    width={10}
                    height={10}
                  />
                </span>
                {challenge.location}
              </p>
              <p>{challenge.time}</p>
              <div id={`description_${challenge._id}`} className="hidden">
                <p>{challenge.description}</p>
              </div>
            </div>
            <div className=" w-1/6 right-0 cursor-pointer">
              <div
                className="absolute bottom-2 "
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
};
export default DisplayChallenges;
