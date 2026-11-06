import React from "react";
import { GithubRepo } from "../types.ts/github";
import { MAGICAL_TYPES } from "../types.ts/constants";
const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
  "Grants the poer of rapid development",
  "Enhances code clarity maintainability",
  "Boosts performance and efficiency",
  "Provide magical debuging abilities",
  "Unlock the secrets f clean architecture",
];

const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire-type",
  },
];
const transformReformRepoToPotion = (repo: GithubRepo, index: number) => {
  return {
    ...repo,
    topics: repo.topics.slice(0, 3),
    potionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
    magicalType: MAGICAL_TYPES[index % POTION_EFFECTS.length],
  };
};
export async function fetchPotions() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;
  const githubToken = process.env.GITHUB_TOKEN;

  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, {
      headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions`);
    }

    const data = await response.json();
    console.log({ data });

    return data.items.map((repo: GithubRepo, index: number) =>
      transformReformRepoToPotion(repo, index),
    );
  } catch (error) {
    console.log("Failed to fetch potions", (error as Error).message);
    return [];
  }
}
