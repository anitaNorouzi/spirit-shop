"use client";

import { MAGICAL_TYPES } from "@/shared/utils/constants";
import Link from "next/link";
import { getFilterPillColor } from "@/shared/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const PotionFilters = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload" && window.location.search) {
      router.replace(pathname);
    }
  }, [pathname, router]);

  return (
    <div className="flex flex-wrap gap-4">
      {MAGICAL_TYPES.map(({ id, icon, label }) => (
        <Link
          href={`?type=${id}`}
          key={id}
          className={`rounded-3xl px-2.5 py-1 flex items-center gap-2 bg-linear-to-br
          to-transparent ${getFilterPillColor(id)}`}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
};

export default PotionFilters;
