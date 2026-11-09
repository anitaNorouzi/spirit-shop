import { PotionInfoType } from "../types.ts/github";
import { LuCode, LuCalendar } from "react-icons/lu";
import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from "@/modules/technologies/components/potion-common";

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
  return (
    <main className="mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-purple-200">{title}</h1>
        <p className="text-purple-300/70">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* left col */}
        <div className="md:col-span-1">
          <div
            className={`p-6 rounded-2xl border
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
        </div>

        {/* right col */}
        <div></div>
      </div>
    </main>
  );
};

export default PotionInfo;
