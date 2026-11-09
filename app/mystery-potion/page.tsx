import PotionInfo from "@/modules/technologies/components/potion-info";
import { fetchRandomTrendingPotion } from "@/modules/technologies/services/github";
import { notFound } from "next/navigation";

const MysteryPotion = async () => {
  const potion = await fetchRandomTrendingPotion();
  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion}></PotionInfo>;
};

export default MysteryPotion;
