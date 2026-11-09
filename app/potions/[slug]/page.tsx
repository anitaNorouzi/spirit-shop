import { fetchPotion } from "@/modules/technologies/services/github";
import { notFound } from "next/navigation";
import PotionInfo from "@/modules/technologies/components/potion-info";
import { Metadata } from "next";
import { ORIGIN_URL } from "@/shared/utils";
type MetadataParams = {
  params: Promise<{ slug: string }>;
};
export const generateMetadata = async ({ params }: MetadataParams) => {
  const { slug } = await params;
  const [owner, repo] = slug.split("__");
  const potion = await fetchPotion(owner, repo);

  return {
    title: `${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/potions/${potion?.full_name.replace("/", "__")}`,
    },
  };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "microsoft/TypeScript",
  ];
  return popularRepos.map((repo) => ({
    slug: repo.replace("/", "__"),
  }));
}

export default async function PotionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [owner, repo] = slug.split("__");
  if (!owner || !repo) {
    notFound();
  }
  const potion = await fetchPotion(owner, repo);
  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion}></PotionInfo>;
}
