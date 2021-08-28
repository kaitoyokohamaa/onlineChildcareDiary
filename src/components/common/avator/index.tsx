import React from "react";
import Image from "next/image";
export const Avator = () => {
  return (
    <Image
      alt="profile"
      className="rounded-full"
      width={28}
      height={28}
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
  );
};
