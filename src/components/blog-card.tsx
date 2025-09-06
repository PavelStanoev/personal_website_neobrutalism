import React from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  slug,
}) => {
  // Check if description is longer than 2 lines (approximately 100 characters)
  const isLongDescription = description.length > 100;
  const truncatedDescription = isLongDescription
    ? description.substring(0, 100) + "..."
    : description;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="bg-main/80 border-4 border-border shadow-[8px_8px_0px_0px_#000] rounded-none p-6 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:z-10 transition-all duration-200 ease-out relative cursor-pointer h-[150px] flex flex-col">
        {/* Blog Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 ">{title}</h3>

        {/* Blog Description with Tooltip */}
        <div className="flex-1 mb-4">
          {isLongDescription ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-foreground text-sm leading-relaxed  cursor-pointer">
                    {truncatedDescription}
                  </p>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <p className="text-foreground text-sm leading-relaxed ">
              {description}
            </p>
          )}
        </div>

        {/* Date - Always at bottom */}
        <div className="flex items-center gap-2 text-sm text-foreground/70 mt-auto">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
