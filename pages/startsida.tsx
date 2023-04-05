import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Challenge {
  _id?: string;
  publisher: string;
  title: string;
  description: string;
  category: string;
  location: string;
  time: string;
}

function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const challenge = {
    publisher: "",
    title: "",
    description: "",
    category: "",
    location: "",
    time: "",
  };
  const handleSubmit = async () => {
    const challenge = {
      publisher: (document.getElementById("publisher") as HTMLInputElement)
        .value,
      title: (document.getElementById("challengeTitle") as HTMLInputElement)
        .value,
      description: (document.getElementById("description") as HTMLInputElement)
        .value,
      category: (document.getElementById("category") as HTMLInputElement).value,
      location: (document.getElementById("location") as HTMLInputElement).value,
      time:
        (document.getElementById("time") as HTMLInputElement).value +
        "-" +
        (document.getElementById("finished_time") as HTMLInputElement).value,
    };
    const res = await fetch("/api/challenges", {
      method: "POST",
      body: JSON.stringify(challenge),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setChallenges([challenge, ...challenges]);
  };

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

    if (challengeForm && showForm) {
      if (challengeForm.style.display === "none") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        challengeForm.style.display = "block";
        showForm.style.display = "none";
      } else {
        challengeForm.style.display = "none";
        showForm.style.display = "block";
      }
    }
  }

  return (
    <div className=" bg-white">
      <Head>
        <title>Active-startsida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Activeicon.ico" />
      </Head>
      <main className="">
        <div className=" flex justify-center items-center">
          <Image
            src={"/activelogga.png"}
            alt={"#"}
            width={"300"}
            height={"300"}
          ></Image>
        </div>
        <form
          id="challengeForm"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 hidden"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="publisher"
            >
              Publisher
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="publisher"
              type="text"
              placeholder="Author name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="challengeTitle"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="challengeTitle"
              type="text"
              placeholder="Challenge title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Category"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              Time
            </label>
            <div className="flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="time"
                placeholder="Time"
              />
              _
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="finished_time"
                type="time"
                placeholder="Time"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              id="button"
              onClick={() => handleSubmit(challenge)}
            >
              Submit challenge
            </button>
            <button
              className="purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
              type="button"
              id="hide-form-btn"
              onClick={hideForm}
            >
              X
            </button>
          </div>
        </form>
        {challenges.map((challenge) => (
          <div
            className="flex justify-center items-center m-5"
            key={challenge._id}
          >
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg flex cards-size-color">
              <div className="w-16 flex-shrink-0 m-2">
                <Image
                  src="/user-avatar.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </div>
              <div className="px-6 py-4 mr-10 ml-4 ">
                <p className=" text-urbanist text-black-700 text-lg  body-font font-Urbanist">
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
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center">
          <button
            className="purple1 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline fixed bottom-4 z-50 w-4/5"
            type="button"
            id="show-form-btn"
            onClick={hideForm}
          >
            Create a new challenge
          </button>
        </div>
      </main>
    </div>
  );
}
export default Challenges;
