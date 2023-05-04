import { useSession } from "next-auth/react";
const EditProfile = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="w-screen h-screen bg-active-offWHite">
      <p>GUEGO {session?.user?.location}</p>
    </div>
  );
};
export default EditProfile;
