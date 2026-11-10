import React from "react";
import PotionCard from "./potion-card";
import type { PotionType } from "@/modules/technologies/types.ts/github";

interface PotionGridProps {
  potions: PotionType[];
}

const PotionGrid = ({ potions }: PotionGridProps) => {
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
