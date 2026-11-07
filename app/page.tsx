import { Suspense } from "react";
import { Card, Text } from "@mantine/core";
import { fetchPotions } from "@/modules/technologies/services/github";
import type { PotionType } from "@/modules/technologies/types.ts/github";

// export const revalidate = 0;

async function PotionList() {
  const potions = await fetchPotions();

  return (
    <div className="mt-8">
      {potions.map(({ full_name, name, description, topics }: PotionType) => (
        <Card
          key={full_name}
          shadow="sm"
          padding="xl"
          component="a"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Text fw={500} size="lg" mt="md">
            {name}
          </Text>

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
      ))}
    </div>
  );
}

export default function Home() {
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
        <PotionList />
      </Suspense>
    </main>
  );
}
