import Image from "next/image";

interface Props {
  alt: string;
  width: number;
  height: number;
  className?: string;
  src?: string | null;
}
export default function Avatar({ src, alt, width, height, className }: Props) {
  return (
    <Image
      src={src || "/user-avatar.png"}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
