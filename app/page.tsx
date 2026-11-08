import { Suspense } from "react";
import { fetchPotions } from "@/modules/technologies/services/github";
import PotionGrid from "@/modules/technologies/components/potion-grid";
// export const revalidate = 0;

export default async function Home() {
  const potions = await fetchPotions();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="mb-4 bg-linear-to-r from-magic-light-purple via-magic-pink to-magic-pink bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Open Source Spirit Shop
        </h1>

        <p className="text-lg text-foreground/80 ">
          Discover magical potions brewd from the powers of popular open-source
          tools.{" "}
        </p>
      </div>

      <Suspense fallback={<p>Loading potions...</p>}>
        <PotionGrid potions={potions} />
      </Suspense>
    </main>
  );
}
