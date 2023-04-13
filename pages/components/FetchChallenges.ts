import { useEffect, useState } from "react";
import { challenge } from "@/types/challengeTemp";
export function FetchChallenges() {
  const [challenges, setChallenges] = useState<challenge[]>([]);

  useEffect(() => {
    async function fetchChallenges() {
      const res = await fetch("/api/challenges");
      const data = await res.json();
      setChallenges(data);
    }

    fetchChallenges();

    return () => {
      setChallenges([]);
    };
  }, []);

  return challenges;
}
