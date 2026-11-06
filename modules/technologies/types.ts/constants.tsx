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
];
