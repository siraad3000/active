import Image from "next/image";
export default function Avatar() {
  return (
    <div>
      <div className="flex items-end justify-end mr-2">
        <Image src="/user-avatar.png" alt="Avatar" width={35} height={35} />
      </div>
    </div>
  );
}
