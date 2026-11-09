import PotionInfo from "@/modules/technologies/components/potion-info";
import { fetchRandomTrendingPotion } from "@/modules/technologies/services/github";
import { notFound } from "next/navigation";
import { ORIGIN_URL } from "@/shared/utils";
export const dynamic = "force-dynamic";

export const generateMetadata = async () => {
  const potion = await fetchRandomTrendingPotion();

  return {
    title: `Mystery Potion - ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/mystery-potion`,
    },
  };
};
const MysteryPotion = async () => {
  const potion = await fetchRandomTrendingPotion();
  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion}></PotionInfo>;
};

export default MysteryPotion;
