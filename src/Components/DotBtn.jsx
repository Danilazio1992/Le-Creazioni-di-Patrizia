import { useState } from "react";

export default function DotBtn({ current, i, goToSlide }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`flex p-2.5 drop-shadow-md rounded-full cursor-pointer ${isHovered || current === i ? " bg-amber-950 drop-shadow-amber-400" : "bg-gray-400 drop-shadow-amber-950"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => goToSlide(e)}
      value={i}
    ></button>
  );
}
