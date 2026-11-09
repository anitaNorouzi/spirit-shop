import React from "react";
import { GithubRepo, MagicalType } from "../types.ts/github";
import { MAGICAL_TYPES } from "../../../shared/utils/constants";
const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
  "Grants the poer of rapid development",
  "Enhances code clarity maintainability",
  "Boosts performance and efficiency",
  "Provide magical debuging abilities",
  "Unlock the secrets f clean architecture",
];

const transformReformRepoToPotion = (
  repo: GithubRepo,
  index: number,
  magicalTypeIndex = index,
) => {
  return {
    ...repo,
    topics: repo.topics.slice(0, 3),
    potionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
    magicalType: MAGICAL_TYPES[magicalTypeIndex % MAGICAL_TYPES.length]
      .id as MagicalType,
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
  try {
    const response = await fetch(url, {
      headers,
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();
    console.log("Fetching potion", owner, repo);
    return transformReformRepoToPotion(data, 0, data.id);
  } catch (error) {
    console.error("Failed to fetch potions", (error as Error).message);
    return null;
  }
}

export async function fetchRandomTrendingPotion() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>7000&sort=stars&order=desc`;
  const githubToken = process.env.GITHUB_TOKEN;

  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, {
      headers, //SSR
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions`);
    }

    const data = await response.json();
    console.log({ data });
    if (!Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("No trending potions returned");
    }

    const randomIndex = Math.floor(Math.random() * data.items.length);
    return transformReformRepoToPotion(data.items[randomIndex], randomIndex);
  } catch (error) {
    console.log("Failed to fetch potions", (error as Error).message);
    return null;
  }
}
