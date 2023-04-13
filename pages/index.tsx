import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/startsida" after 3 seconds
    const timeoutId = setTimeout(() => {
      router.push("/startsida");
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Redirecting to main page in 3 seconds...
      </h1>
      <div className="animate-ping h-12 w-12 bg-purple-500 rounded-full"></div>
    </div>
  );
};

export default Index;
