import PotionInfo from "@/modules/technologies/components/potion-info";
import { fetchRandomTrendingPotion } from "@/modules/technologies/services/github";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mystery Potion | Open Source Spirit Shop",
  description: "Discover a random potion brewed from an open-source project.",
  alternates: {
    canonical: "/mystery-potion",
  },
};

const MysteryPotion = async () => {
  const potion = await fetchRandomTrendingPotion();
  if (!potion) {
    return (
      <p role="alert">
        Could not brew a mystery potion right now. Please try again later.
      </p>
    );
  }

  return <PotionInfo potion={potion}></PotionInfo>;
};

export default MysteryPotion;
