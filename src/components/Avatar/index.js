import React, { useId } from "react";

const Avatar = ({ src, alt, w, h }) => {
  const id = useId();
  return (
    <div
      className={`rounded-full overflow-hidden border-4 border-blue-500
         w-40 h-40 sm:w-52 sm:h-52 md:w-[25rem] md:h-[25rem]`}
    >
      <img
        src={src}
        alt={alt ? alt : `avatar-${id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Avatar;
