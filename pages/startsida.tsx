import Head from "next/head";
import { useEffect, useState } from "react";
import { Challenge } from "@/types/challengeTemp";
import DisplayChallenges from "./components/DisplayChallenges";
import FooterNavbar from "./components/FooterNavbar";
import Header from "./components/Header";
import ChallengeForm from "./components/ChallengeForm";
function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    async function fetchChallenges() {
      const res = await fetch("/api/challenges");
      const data = await res.json();
      setChallenges(data);
    }
    fetchChallenges();
  }, []);

  const handleChallengeSubmit = async (challenge: Challenge) => {
    const res = await fetch("/api/challenges", {
      method: "POST",
      body: JSON.stringify(challenge),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(challenge);
    setChallenges([challenge, ...challenges]);
  };

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
        {/* challenge form component */}
        <ChallengeForm onSubmit={handleChallengeSubmit} />
        {/* Display challenges component */}
        <DisplayChallenges challenges={challenges} />
        <div id="footer">
          <FooterNavbar />
        </div>
      </main>
    </div>
  );
}

export default Challenges;
