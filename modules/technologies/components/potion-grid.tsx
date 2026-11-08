import React from "react";
import PotionCard from "./potion-card";
import { Card, Text, Image, Box, Badge } from "@mantine/core";
import getMagicalTypeIcon from "@/shared/utils";
import { LuStar, LuPackage } from "react-icons/lu";
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
      {potions.map((potion, index) => (
        <PotionCard {...potion} key={`${potion.name}-${index}`} />
      ))}
    </div>
  );
};

export default PotionGrid;
