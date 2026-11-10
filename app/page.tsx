import { fetchPotions } from "@/modules/technologies/services/github";
import PotionFilters from "@/modules/technologies/components/potion-filters";
import PotionGrid from "@/modules/technologies/components/potion-grid";
import type { PotionType } from "@/modules/technologies/types.ts/github";
// export const revalidate = 0;
type PageType = {
  searchParams: Promise<{
    type: string;
  }>;
};

export default async function Home({ searchParams }: PageType) {
  const potions = await fetchPotions();
  const { type } = await searchParams;
  const filteredPotions = type
    ? potions.filter((potion: PotionType) => potion.magicalType === type)
    : potions;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="mb-4 bg-linear-to-r from-magic-light-purple via-magic-pink to-magic-pink bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Open Source Spirit Shop
        </h1>

        <p className="text-lg text-foreground/80 ">
          Discover magical potions brewed from the powers of popular open-source
          tools.{" "}
        </p>
      </div>
      <div className="flex justify-center mb-7">
        <PotionFilters />
      </div>

      <PotionGrid potions={filteredPotions} />
    </div>
  );
}
