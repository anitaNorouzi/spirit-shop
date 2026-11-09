import { LuFlame, LuSnowflake, LuZap, LuSparkles } from "react-icons/lu";

export const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire-type",
    icon: <LuFlame className="text-element-fire" />,
  },
  {
    id: "ice",
    value: "🧊",
    label: "Ice-type",
    icon: <LuSnowflake className="text-element-ice" />,
  },
  {
    id: "electric",
    value: "⚡️",
    label: "Electric-type",
    icon: <LuZap className="text-element-electric" />,
  },
  {
    id: "all",
    value: "✨",
    label: "All Types",
    icon: <LuSparkles className="text-magic-purple" />,
  },
] as const;

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};
