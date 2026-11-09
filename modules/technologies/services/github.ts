import React from "react";
import { GithubRepo } from "../types.ts/github";
import { MAGICAL_TYPES } from "../../../shared/utils/constants";
const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
  "Grants the poer of rapid development",
  "Enhances code clarity maintainability",
  "Boosts performance and efficiency",
  "Provide magical debuging abilities",
  "Unlock the secrets f clean architecture",
];

const transformReformRepoToPotion = (repo: GithubRepo, index: number) => {
  return {
    ...repo,
    topics: repo.topics.slice(0, 3),
    potionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
    magicalType: MAGICAL_TYPES[index % MAGICAL_TYPES.length].id,
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
      cache: "force-cache",
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

export async function fetchPotion(owner: string, repo: string) {
  const url = `${GITHUB_API_URL}/repos/${owner}/${repo}`;
  const githubToken = process.env.GITHUB_TOKEN;

  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  const response = await fetch(url, {
    headers,
    next: {
      revalidate: 3600,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch potion: ${response.status}`);
  }

  const data = await response.json();
  console.log("Fetching potion", { data });

  return transformReformRepoToPotion(data, 0);
}
