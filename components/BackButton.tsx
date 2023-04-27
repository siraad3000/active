import Image from "next/image";

export default function BackButton() {
  return (
    <p className="flex items-center ">
      <Image
        src={"/Arrow-Icon-Small-Left-Purple.png"}
        alt={"#"}
        width={"20"}
        height={"20"}
        className=""
      />
      Tillbaka
    </p>
  );
}
