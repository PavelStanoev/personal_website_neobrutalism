import { IconType } from "react-icons";

interface Skill {
  text: string;
  Icon: IconType;
}

interface MarqueeProps {
  items?: string[];
  skills?: Skill[];
}

export default function Marquee({ items, skills }: MarqueeProps) {
  // Use skills if provided, otherwise fall back to items
  const content = skills || items;

  if (!content) return null;

  const renderContent = (item: string | Skill, index: number) => {
    if (typeof item === "string") {
      return (
        <span key={`${item}-${index}`} className="mx-4 text-4xl">
          {item}
        </span>
      );
    } else {
      return (
        <div
          key={`${item.text}-${index}`}
          className="flex items-center mx-6 flex-shrink-0"
        >
          <item.Icon className={`text-xl`} />
          <span className="text-lg font-heading ml-2">{item.text}</span>
        </div>
      );
    }
  };

  const containerClass = skills
    ? "relative flex w-full overflow-x-hidden border-t-2 border-b-2 border-border text-foreground font-base"
    : "relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background  text-foreground font-base";

  const paddingClass = skills ? "py-3" : "py-6";

  return (
    <div className={`${containerClass}`}>
      <div className={`animate-marquee whitespace-nowrap ${paddingClass} flex`}>
        {content.map((item, index) => renderContent(item, index))}
      </div>

      <div
        className={`absolute top-0 animate-marquee2 whitespace-nowrap ${paddingClass} flex`}
      >
        {content.map((item, index) => renderContent(item, index))}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
