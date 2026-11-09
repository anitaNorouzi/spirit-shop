import { fetchPotion } from "@/modules/technologies/services/github";
import { notFound } from "next/navigation";

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

  return <div>My slug: {JSON.stringify(potion)}</div>;
}
