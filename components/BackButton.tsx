import Image from "next/image";
import router from "next/router";

export default function BackButton() {
  return (
    <div className="cursor-pointer" onClick={() => router.push("/startsida")}>
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
    </div>
  );
}
