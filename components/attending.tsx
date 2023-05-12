import { Challenge } from "@/types/challengeTemp";
import Avatar from "./UserAvatar";

interface Props {
  challenge: Challenge;
}

export default function Attending({ challenge }: Props): JSX.Element {
  let counter = 0;

  const attendingToRender = challenge.attending?.slice(0, 3); // Store attendees to be rendered in a separate variable
  const remainingAttendees = challenge.attending?.slice(3); // Get the remaining attendees

  return (
    <div>
      {attendingToRender && attendingToRender.length > 0 ? (
        <p className="text-sm text-active-purple font-bold mb-1">Kommer</p>
      ) : null}

      <div className="flex items-center -space-x-4">
        {attendingToRender?.map((attendee) => {
          counter++;

          return (
            <Avatar
              key={counter}
              alt="avatar"
              width={30}
              height={30}
              className={`z-${
                40 - counter * 10
              } inline-flex items-center justify-center h-[2.858em] w-[2.858em] rounded-full bg-gray-200 border border-active-black font-normal bg-white text-gray-700 shadow-sm align-middle text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white`}
            />
          );
        })}

        {remainingAttendees && remainingAttendees?.length > 0 && (
          <div className="flex justify-start w-full items-center">
            <p className="ml-7">+ {remainingAttendees.length} till</p>
          </div>
        )}
      </div>
    </div>
  );
}
