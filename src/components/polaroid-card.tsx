import React from "react";
import Star22 from "./stars/s22";
interface PolaroidCardProps {
  imageUrl: string;
  username: string;
  className?: string;
}

const PolaroidCard = ({
  imageUrl,
  username,
  className = "",
}: PolaroidCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Polaroid Card - Made bigger and wider */}
      <div className="bg-white border-4 border-black rounded-[20px] p-6 shadow-[8px_8px_0px_0px_#000] w-80">
        <Star22
          className="absolute -top-12 -right-12 w-28 h-28 "
          color="var(--main)"
          strokeWidth={4}
          stroke={"black"}
        />
        {/* Image Container - Wider and taller */}
        <div className="rounded-[12px] border-4 border-black overflow-hidden mb-4 bg-main/80">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Username */}
        <div className="text-center">
          <p className="text-2xl font-bold text-black">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default PolaroidCard;
