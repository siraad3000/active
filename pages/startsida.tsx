import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { challenge } from "@/types/challengeTemp";
import DisplayChallenges from "./components/DisplayChallenges";
import FooterNavbar from "./components/FooterNavbar";
import Header from "./components/Header";
function Challenges() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFor, setSelectedFor] = useState("");
  const [challenges, setChallenges] = useState<challenge[]>([]);
  const challenge = {
    title: "",
    description: "",
    level: "",
    location: "",
    date: "",
    time: "",
    showFor: "",
    attending: [],
  };
  // function handleOptionChange(event) {
  //   setSelectedOption(event.target.value);
  // }
  // function handleForChange(event) {
  //   setSelectedFor(event.target.value);
  // }

  // const handleSubmit = async () => {
  //   const challenge = {
  //     title: (document.getElementById("challengeTitle") as HTMLInputElement)
  //       .value,
  //     description: (document.getElementById("description") as HTMLInputElement)
  //       .value,
  //     level: selectedOption,
  //     location: (document.getElementById("location") as HTMLInputElement).value,
  //     time:
  //       (document.getElementById("time") as HTMLInputElement).value +
  //       "-" +
  //       (document.getElementById("finished_time") as HTMLInputElement).value,
  //     showFor: selectedFor,
  //   };
  //   const res = await fetch("/api/challenges", {
  //     method: "POST",
  //     body: JSON.stringify(challenge),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   setChallenges([challenge, ...challenges]);
  // };

  useEffect(() => {
    async function fetchChallenges() {
      const res = await fetch("/api/challenges");
      const data = await res.json();
      setChallenges(data);
    }
    fetchChallenges();
  }, []);
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
    <div>
      <Head>
        <title>Active-startsida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Activeicon.ico" />
      </Head>
      <main>
        <Header />
        <form
          id="challengeForm"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 hidden"
        >
          <h1>Skapa aktivitet</h1>

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="challengeTitle"
              type="text"
              placeholder="Namnnge din aktivitet"
            />

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Datum och tid
              </label>
              <div className="flex">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-40"
                  id="date-active"
                  type="date"
                  placeholder="Time"
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                  id="time"
                  type="time"
                  placeholder="Time"
                />
                _
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                  id="finished_time"
                  type="time"
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
                  d="m9.94 12.646-2.248-.749c-2.353-.784-3.53-1.176-3.53-1.897 0-.72 1.177-1.113 3.53-1.897l8.513-2.838c1.656-.552 2.484-.828 2.921-.391.437.437.161 1.265-.39 2.92l-2.839 8.514c-.784 2.353-1.176 3.53-1.897 3.53-.72 0-1.113-1.177-1.897-3.53l-.75-2.247 4.354-4.354a1 1 0 0 0-1.414-1.414l-4.354 4.353Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4 text-sm "
                id="location"
                type="text"
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
            <div className="flex-row items-center justify-center ">
              <div className="flex items-center pl-4  w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/lätt"
                  type="radio"
                  name="level"
                  id="level"
                  value={"lätt"}
                  checked={selectedOption === "lätt"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="level"
                  className="w-full h-full py-3 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/lätt:bg-red-500 peer-checked/lätt:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center "
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
                  checked={selectedOption === "medel"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="level2"
                  className="w-full h-full py-3 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/medel:bg-red-500 peer-checked/medel:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  medel
                </label>
              </div>

              <div className="flex items-center pl-4  w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/test"
                  type="radio"
                  name="leve"
                  id="level3"
                  value={"intensivt"}
                  checked={selectedOption === "intensivt"}
                  onChange={handleOptionChange}
                />

                <label
                  htmlFor="level3"
                  className="w-full h-full py-3 text-sm font-medium peer-cheaked:text-red-500 text-center  peer-checked/test:bg-red-500 peer-checked/test:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
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
              placeholder="Description"
              maxLength={500}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="showFor"
            >
              Visas för
            </label>
            <div className="flex-row items-center justify-center content-center">
              <div className="flex items-center pl-4  w-32 h-7">
                {" "}
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/vänner"
                  type="radio"
                  name="showFor"
                  id="vänner"
                  value={"Vänner"}
                  checked={selectedFor === "Vänner"}
                  onChange={handleForChange}
                />
                <label
                  htmlFor="vänner"
                  className="w-full h-full py-3  text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/vänner:bg-red-500 peer-checked/vänner:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  {" "}
                  Vänner{" "}
                </label>
              </div>

              <div className="flex items-center pl-4  w-32 h-7">
                <input
                  className="text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/grupper"
                  type="radio"
                  name="showFor"
                  id="grupper"
                  value={"Grupper"}
                  checked={selectedFor === "Grupper"}
                  onChange={handleForChange}
                />
                <label
                  htmlFor="grupper"
                  className="w-full h-full py-3  text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/grupper:bg-red-500 peer-checked/grupper:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
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
                  checked={selectedFor === "Offentligt"}
                  onChange={handleForChange}
                />
                <label
                  htmlFor="all"
                  className="w-full h-full py-3 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/all:bg-red-500 peer-checked/all:text-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  Offentligt
                </label>
              </div>
            </div>
          </div>

          <button
            className=" w-full purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="reset"
            id="button"
            onClick={() => {
              handleSubmit();
              hideForm();
            }}
          >
            Publicera
          </button>
          <div className="flex items-center justify-between mt-3">
            <button
              className="purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
              type="button"
              id="hide-form-btn"
              onClick={hideForm}
            >
              return
            </button>
            <button
              className="purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
              type="reset"
              id="hide-form-btn"
              onClick={hideForm}
            >
              exit
            </button>
          </div>
        </form>
        {/* Fetch challenges component */}

        <DisplayChallenges />
        <div
          className="w-14 h-14 flex justify-end fixed bottom-20 right-5 rounded-ful "
          id="show-form-btn"
        >
          <button
            className="flex justify-center items-center purple1 hover:bg-purple-700 w-full h-full rounded-full "
            type="button"
            onClick={hideForm}
          >
            <Image
              src={"/Plus-Icon-Big-White.png"}
              alt="#"
              width={28}
              height={28}
            ></Image>
          </button>
        </div>
        <div id="footer">
          <FooterNavbar />
        </div>
      </main>
    </div>
  );
}

export default Challenges;
