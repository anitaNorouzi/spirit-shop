import { Card, Text, Image, Box, Badge } from "@mantine/core";
import getMagicalTypeIcon from "@/shared/utils";
import { LuStar, LuPackage } from "react-icons/lu";
import { formatNumber } from "@/shared/utils/constants";
import type { MagicalType } from "../types.ts/github";

interface PotionHeaderType {
  name: string;
  magicalType: MagicalType;
  owner: {
    login: string;
    avatar_url: string;
  };
  size?: "small" | "small";
}

export const PotionHeader = ({
  name,
  magicalType,
  owner: { login, avatar_url },
  size = "small",
}: PotionHeaderType) => {
  return (
    <>
      <div className="flex items-center gap-3 py-3">
        <Image
          src={avatar_url}
          alt={`${login}'s avatar`}
          className="h-10 w-10 -translate-y-px rounded-full border border-purple-500/20"
        />
        <div>
          <Text fw={500} size="lg" c="white">
            {name}
          </Text>
          <Text c="dimmed" size="xs">
            {login}
          </Text>
        </div>
      </div>
    </>
  );
};

interface PotionInfoCardType {
  title: string;
  children?: React.ReactNode;
}

export const PotionInfoCard = ({ title, children }: PotionInfoCardType) => {
  return (
    <div
      className="p-4 rounded-lg bg-background/40 
    border border-magic-purple/10"
    >
      <h4 className="text-sm font-medium text-magic-light-purple mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
};
interface PotionStatsType {
  stars: number;
  forks: number;
  className?: string;
}
export const PotionStats = ({ stars, forks, className }: PotionStatsType) => {
  return (
    <Box
      className={`flex justify-between text-foreground/70 ${className ?? ""}`}
    >
      <Box className="flex gap-0.5 items-center">
        <LuStar className="text-yellow-400 w-3.5 h-3.5" />
        <Text className="text-xs">{formatNumber(stars)}</Text>
      </Box>

      <Box className="flex gap-0.5 items-center">
        <LuPackage className="text-blue-400 w-3.5 h-3.5" />
        <Text className="text-xs">{formatNumber(forks)}</Text>
      </Box>
    </Box>
  );
};
