import { useState } from "react";
import Image from "next/image";
import { Challenge } from "@/types/challengeTemp";

type ChallengeFormProps = {
  onSubmit: (challenge: Challenge) => void;
};

export default function ChallengeForm({ onSubmit }: ChallengeFormProps) {
  const [challengeTitle, setChallengeTitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [level, setlevel] = useState<string>("");
  const [location, setlocation] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [finishTime, setFinishTime] = useState<string>("");
  const [showFor, setShowFor] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const challenge = {
      title: challengeTitle,
      description: description,
      level: level,
      location: location,
      time: startTime + "-" + finishTime,
      showFor: showFor,
      date: date,
    };

    onSubmit(challenge);
  };
  function hideForm() {
    const challengeForm = document.getElementById("challengeForm");
    const showForm = document.getElementById("show-form-btn");
    const cards = document.getElementById("cards");
    const footer = document.getElementById("footer");
    if (challengeForm && showForm && cards && footer) {
      if (
        challengeForm.style.display === "none" ||
        challengeForm.style.display === ""
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        challengeForm.style.display = "block";
        showForm.style.display = "none";
        cards.style.display = "none";
        footer.style.display = "none";
      } else {
        challengeForm.style.display = "none";
        showForm.style.display = "block";
        cards.style.display = "block";
        footer.style.display = "block";
      }
    }
  }
  return (
    <div className="mt-24 bg-active-white">
      <form
        id="challengeForm"
        className="h-full bg-white p-8 hidden"
        onSubmit={handleSubmit}
      >
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="time"
        >
          Skapa aktivitet
        </label>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="challengeTitle"
            required
            maxLength={15}
            value={challengeTitle}
            onChange={(event) => setChallengeTitle(event.target.value)}
            type="text"
            placeholder="Namnnge din aktivitet"
          />

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateTime"
            >
              Datum och tid
            </label>
            <div id="dateTime" className="flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-40"
                onChange={(event) => setDate(event.target.value)}
                type="date"
                placeholder="date"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                id="start_time"
                type="time"
                required
                onChange={(event) => setStartTime(event.target.value)}
                placeholder="Time"
              />
              _
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                id="finished_time"
                type="time"
                required
                onChange={(event) => setFinishTime(event.target.value)}
                placeholder="Time"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>

          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="m9.94 12.646-2.248-.749c-2.353-.784-3.53-1.176-3.53-1.897 0-.72 1.177-1.113 3.53-1.897l8.513-2.838c1.656-.552 
          
          2.484-.828 2.921-.391.437.437.161 1.265-.39 2.92l-2.839 8.514c-.784 2.353-1.176 3.53-1.897 3.53-.72 0-1.113-1.177-1.897-3.53l-.75-2.247 4.354-4.354a1 1 0 0 0-1.414-1.414l-4.354 4.353Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4 text-sm "
              id="location"
              type="text"
              required
              maxLength={75}
              onChange={(event) => setlocation(event.target.value)}
              placeholder="Årstaskogen Naturreservat 120 59 Årsta"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="level"
          >
            Välj nivå
          </label>
          <div className="flex flex-row items-center justify-start ">
            <div className="flex items-center pl-4  w-32 h-7">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/lätt"
                type="radio"
                name="level"
                id="level"
                value={"lätt"}
                onChange={(event) => setlevel(event.target.value)}
              />
              <label
                htmlFor="level"
                className="w-full h-full py-3 text-sm font-medium text-center peer-checked/lätt:bg-active-purple
           peer-checked/lätt:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center "
              >
                Lätt
              </label>
            </div>

            <div className="flex items-center pl-4  w-32 h-7">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/medel"
                type="radio"
                name="level"
                id="level2"
                value={"medel"}
                onChange={(event) => setlevel(event.target.value)}
              />
              <label
                htmlFor="level2"
                className="w-full h-full py-3 text-sm font-medium text-center peer-checked/medel:bg-active-purple 
           peer-checked/medel:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
              >
                medel
              </label>
            </div>

            <div className="flex items-center pl-4  w-32 h-7">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/test"
                type="radio"
                name="level"
                id="level3"
                value={"intensivt"}
                onChange={(event) => setlevel(event.target.value)}
              />

              <label
                htmlFor="level3"
                className="w-full h-full py-3 text-sm font-medium text-center  peer-checked/test:bg-active-purple
                 peer-checked/test:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
              >
                intensivt
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Lägg till beskrivning
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows={5}
            required
            maxLength={500}
            placeholder="Description"
            onChange={(event) => setdescription(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="showFor"
          >
            Visas för
          </label>
          <div className="flex flex-row items-center justify-start content-center">
            <div className="flex items-center pl-4 w-32 h-7">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 peer/friends hidden"
                type="radio"
                name="showFor"
                id="friends"
                value={"Vänner"}
                onChange={(event) => setShowFor(event.target.value)}
              />
              <label
                htmlFor="friends"
                className="w-full h-full py-3 ml-2 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/friends:bg-active-purple peer-checked/friends:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
              >
                Vänner
              </label>
            </div>

            <div className="flex items-center pl-4 w-32 h-7">
              <input
                className="text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/grupper"
                type="radio"
                name="showFor"
                id="grupper"
                value={"Grupper"}
                onChange={(event) => setShowFor(event.target.value)}
              />
              <label
                htmlFor="grupper"
                className="w-full h-full py-3 ml-2 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/grupper:bg-active-purple peer-checked/grupper:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
              >
                Grupper
              </label>
            </div>
            <div className="flex items-center pl-4  w-32 h-7 ">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/all"
                type="radio"
                name="showFor"
                id="all"
                value={"Offentligt"}
                onChange={(event) => setShowFor(event.target.value)}
              />
              <label
                htmlFor="all"
                className="w-full h-full py-3 text-sm font-medium  text-center peer-checked/all:bg-active-purple
                   peer-checked/all:text-active-white border border-gray-200 
                   rounded dark:border-gray-700 flex items-center justify-center"
              >
                Offentligt
              </label>
            </div>
          </div>
        </div>

        <button
          className=" w-full purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
          id="button"
          onClick={() => {
            hideForm();
          }}
        >
          Publicera
        </button>
        <div className="flex items-center justify-between mt-3">
          <button
            className="purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
            type="button"
            id="hide-form-btn"
            onClick={hideForm}
          >
            return
          </button>
          <button
            className="purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
            type="reset"
            id="hide-form-btn"
            onClick={hideForm}
          >
            exit
          </button>
        </div>
      </form>
      <div
        className="w-14 h-14 flex justify-center items-center rounded-full fixed bottom-40 right-5 rounded-ful bg-active-purple z-10"
        id="show-form-btn"
        onClick={hideForm}
      >
        <button
          className="flex justify-center items-center  hover:bg-purple-700 w-full h-full rounded-full "
          type="button"
        >
          <Image
            src={"/Plus-Icon-Big-White.png"}
            alt="#"
            width={28}
            height={28}
          ></Image>
        </button>
      </div>
    </div>
  );
}