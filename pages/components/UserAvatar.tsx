import Image from "next/image";
export default function Avatar() {
  return (
    <Image
      src="/user-avatar.png"
      alt="Avatar"
      width={35}
      height={35}
      className="flex items-end justify-end mr-5"
    />
  );
}
