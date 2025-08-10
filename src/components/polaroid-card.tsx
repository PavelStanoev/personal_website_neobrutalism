import React from "react";

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
      {/* Polaroid Card */}
      <div className="bg-white border-4 border-black rounded-[20px] p-4 shadow-[8px_8px_0px_0px_#000]">
        {/* Image Container */}
        <div className="bg-gradient-to-br from-lime-300 to-lime-400 rounded-[12px] border-4 border-black overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-48 object-cover"
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
