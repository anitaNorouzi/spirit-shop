import { PotionInfoType } from "../types.ts/github";
import { Box, Badge } from "@mantine/core";
import { LuCode, LuCalendar, LuGithub, LuStar } from "react-icons/lu";
import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from "@/modules/technologies/components/potion-common";
import Image from "next/image";
const PotionInfo = ({ potion }: PotionInfoType) => {
  const title = "Potion Details";
  const subTitle = "Discover the magical properities of this encganted brew";
  const {
    name,
    owner,
    description,
    stargazers_count,
    forks_count,
    potionEffect,
    topics,
    language,
    updated_at,
    magicalType,
  } = potion;
  const brewingDifficulty = (forks_count / (stargazers_count || 1)) * 100;
  const potency = Math.min(
    5,
    Math.max(1, Math.floor(stargazers_count / 50000)),
  );
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-3xl font-bold text-purple-200 sm:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-purple-300/70 sm:text-base">{subTitle}</p>
      </div>
      {/* Page columns: left details and right repository information */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="lg:col-span-1">
          <div
            className={`rounded-2xl border p-4 sm:p-6
            border-magic-purple/20 h-full potion-${magicalType}`}
          >
            <div className="space-y-4 text-xs">
              <PotionHeader
                name={name}
                magicalType={magicalType}
                owner={owner}
              />
              <PotionInfoCard title="Effect">
                <p>{potionEffect}</p>
              </PotionInfoCard>

              <PotionInfoCard title="Github Stats">
                <PotionStats
                  stars={stargazers_count}
                  forks={forks_count}
                  className="text-white"
                />
              </PotionInfoCard>

              <PotionInfoCard title="Language">
                <div className="flex items-center gap-2">
                  <LuCode className="h-4 w-4 text-green-400" />
                  <span>{language}</span>
                </div>
              </PotionInfoCard>

              <PotionInfoCard title="Last Updated">
                <div className="flex items-center gap-2">
                  <LuCalendar className="h-4 w-4 text-purple-400" />
                  <span>
                    {new Date(updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </PotionInfoCard>
            </div>
          </div>
        </div>{" "}
        {/* End left column */}
        {/* Right column: top repository panel and bottom properties panel */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-6 lg:col-span-2">
          {/* Right top: repository details */}
          <div
            className={`rounded-2xl border p-4 sm:p-6
            border-magic-purple/20`}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2
                className="mb-0 text-xl font-bold sm:text-2xl
                        text-transparent bg-linear-to-r bg-clip-text
                        from-magic-light-purple
                        via-magic-purple to-magic-pink"
              >
                Repository Details
              </h2>
              <a
                href={`https://github.com/${owner.login}/${name}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2
                        sm:w-auto
                        bg-magic-pink hover:bg-magic-pink/80 transition-colors duration-300
                        "
              >
                <LuGithub className="w-4 h-4" />
                View on Github
              </a>
            </div>
            <p className="mb-6 wrap-break-word text-foreground/80">
              {description}
            </p>
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <PotionInfoCard title="Organization">
                <div className="flex items-center gap-2">
                  <div
                    className="relative
                            overflow-hidden rounded-full ring-2 ring-purple-500/20 h-8 w-8"
                  >
                    <Image
                      src={owner.avatar_url}
                      fill
                      sizes="32px"
                      className="object-cover"
                      alt={owner.login}
                    />
                  </div>
                  <span>{name}</span>
                </div>
              </PotionInfoCard>
              <PotionInfoCard title="Repository Name">
                <span>{name}</span>
              </PotionInfoCard>
              <div className="sm:col-span-2">
                <PotionInfoCard title="Topics">
                  {/* Topic badges */}
                  <Box
                    mt="xs"
                    c="dimmed"
                    size="sm"
                    className="flex flex-wrap items-center gap-2"
                  >
                    {topics.map((topic, index) => (
                      <Badge
                        key={index}
                        size="xs"
                        className="bg-magic-purple/15 text-white/80
                                            px-2 py-1 hover:bg-magic-purple/25"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </Box>
                </PotionInfoCard>
              </div>
            </div>
          </div>
          {/* End right top */}

          {/* Right bottom: magical properties */}
          <div className="rounded-2xl border border-magic-purple/20 p-4 sm:p-6">
            <h3
              className="mb-4 text-lg font-semibold sm:text-xl
                                            text-transparent bg-linear-to-r bg-clip-text from-magic-light-purple
                                            via-magic-purple to-magic-pink"
            >
              Magical Properities
            </h3>

            <div className="mb-6 grid  sm:gap-6">
              <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
                <PotionInfoCard title="Brewing Difficulty">
                  <div className="flex items-center gap-2">
                    <div className="relative w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div
                        className="absolute h-full bg-linear-to-r from-magic-purple to-magic-pink rounded-full"
                        style={{ width: `${brewingDifficulty}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">
                      {brewingDifficulty.toFixed(0)}%
                    </span>
                  </div>
                </PotionInfoCard>

                <PotionInfoCard title="Potency">
                  <div className="flex">
                    {Array.from({ length: potency }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        <LuStar fill="currentColor" className="h-5 w-5" />
                      </span>
                    ))}
                  </div>
                </PotionInfoCard>
              </div>
              <PotionInfoCard title="Notes from the Alchemist">
                <p className="italic text-sm">
                  &quot;This powerful brew contains the essence of open source
                  magic, harnessed from the contributions of developers
                  worldwide. Use it wisely to enhance your coding abilities and
                  bring your digital creations to life.&quot;
                </p>
              </PotionInfoCard>
            </div>
          </div>
          {/* End right bottom */}
        </div>{" "}
        {/* End right column */}
      </div>{" "}
      {/* End page columns grid */}
    </main>
  );
};

export default PotionInfo;
