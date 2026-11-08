import React from "react";
import { Card, Text, Image, Box, Badge } from "@mantine/core";
import getMagicalTypeIcon from "@/shared/utils";
import { LuStar, LuPackage } from "react-icons/lu";
import type {
  MagicalType,
  PotionType,
} from "@/modules/technologies/types.ts/github";
import { formatNumber } from "@/shared/utils/constants";

interface PotionGridProps {
  potions: PotionType[];
}

const potionClasses: Record<MagicalType, string> = {
  fire: "potion-fire",
  ice: "potion-ice",
  electric: "potion-electric",
  all: "potion-card",
};

const PotionCard = ({
  full_name,
  name,
  description,
  stargazers_count,
  forks_count,
  topics,
  magicalType,
  owner: { login, avatar_url },
  potionEffect,
}: PotionType) => {
  return (
    <Card
      key={`${full_name}-${name}`}
      shadow="sm"
      padding="md"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      className={`${potionClasses[magicalType]} relative group h-full 
            cursor-pointer transition-all duration-300`}
    >
      <Box className="flex justify-end">{getMagicalTypeIcon(magicalType)}</Box>
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

      <Text
        mt="sm"
        mb={16}
        size="sm"
        className="text-foreground/70 
            line-clamp-3 h-15 overflow-hidden text-ellipsis"
      >
        {description}
      </Text>
      {/* effects */}
      <Text c="dimmed" size="xs" mb={5}>
        ✨Effect: {potionEffect}
      </Text>
      {/* stars and forks */}
      <Box c="dimmed" className="flex justify-between mb-4">
        <Box className="flex gap-0.5 items-center">
          <LuStar className="text-yellow-400 w-3.5 h-3.5" />
          <Text className="text-xs">{formatNumber(stargazers_count)}</Text>
        </Box>

        <Box className="flex gap-0.5 items-center">
          <LuPackage className="text-blue-400 w-3.5 h-3.5" />
          <Text className="text-xs">{formatNumber(forks_count)}</Text>
        </Box>
      </Box>
      {/* topic badges */}
      <Box mt="xs" c="dimmed" size="sm" className="flex items-center gap-2">
        {topics.map((topic, index) => (
          <Badge
            key={index}
            size="xs"
            className="bg-magic-purple/15 text-white/80
                px-2 py-1 hover:bg-magic-purple/25"
          >
            {topic}
          </Badge>
        ))}
      </Box>
    </Card>
  );
};

export default PotionCard;
