import React from "react";
import Image from "next/image";

interface Props {
  avatarLink?: string;
}

const UserAvatar = ({ avatarLink }: Props) => {
  return (
    <div className="flex items-end justify-end mr-5">
      <Image
        src={avatarLink || "/user-avatar.png"}
        alt="Avatar"
        width={35}
        height={35}
      />
    </div>
  );
};

export default UserAvatar;
