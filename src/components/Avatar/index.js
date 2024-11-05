import React, { useId } from "react";

const Avatar = ({ src, alt, w, h }) => {
  const id = useId();
  const width = w ? w : '25rem';
  const height = h ? h : '25rem';
  return (
    <div
      className={`rounded-full overflow-hidden border-4 border-blue-500`}
      style={{width, height }}
    >
      <img src={src} alt={alt ? alt : `avatar-${id}`} className="object-cover w-full h-full" />
    </div>
  );
};

export default Avatar;
