import React from "react";
import Star22 from "./stars/s22";
import Image from "next/image";
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
      <div className="bg-zinc-100 dark:bg-zinc-800 border-2 border-border rounded-base p-6 shadow-shadow">
        <div className="text-chart-3">
          <Star22
            className="absolute -top-8 -right-8 w-28 h-28 "
            strokeWidth={4}
            stroke={"black"}
          />
        </div>

        {/* Image Container - Wider and taller */}
        <div className="rounded-base border-2 border-border overflow-hidden mb-4 bg-main/40">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-72 lg:h-72 object-cover"
          />
        </div>

        {/* Username */}
        <div className="text-center">
          <p className="text-2xl font-bold text-black dark:text-white">
            {username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolaroidCard;
