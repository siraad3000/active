import Image from "next/image";
export default function Avatar() {
  return (
    <Image
      src="/user-avatar.png"
      alt="Avatar"
      width={35}
      height={35}
      className="mr-5"
    />
  );
}
