import React from "react";
import { Card, Text, Image } from "@mantine/core";

import type {
  MagicalType,
  PotionType,
} from "@/modules/technologies/types.ts/github";

interface PotionGridProps {
  potions: PotionType[];
}

const potionClasses: Record<MagicalType, string> = {
  fire: "potion-fire",
  ice: "potion-ice",
  electric: "potion-electric",
  all: "potion-card",
};

const PotionGrid = async ({ potions }: PotionGridProps) => {
  return (
    <div
      className="grid gap-6 sm:grid-cols-2
    lg:grid-cols-3 "
    >
      {potions.map(
        (
          {
            full_name,
            name,
            description,
            topics,
            magicalType,
            owner: { login, avatar_url },
          }: PotionType,
          index: number,
        ) => (
          <Card
            key={`${full_name}-${index}`}
            shadow="sm"
            padding="md"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className={`${potionClasses[magicalType]} relative group h-full 
            cursor-pointer transition-all duration-300`}
          >
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

            <Text mt="xs" c="dimmed" size="sm">
              {description}
            </Text>
            <Text
              mt="xs"
              c="dimmed"
              size="sm"
              className="flex items-center gap-2"
            >
              {topics.map((topic, index) => (
                <span key={index}>{topic}</span>
              ))}
            </Text>
          </Card>
        ),
      )}
    </div>
  );
};

export default PotionGrid;
