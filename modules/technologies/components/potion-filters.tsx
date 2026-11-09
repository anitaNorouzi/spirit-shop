import { MAGICAL_TYPES } from "@/shared/utils/constants";
import Link from "next/link";
import { getFilterPillColor } from "@/shared/utils";

const PotionFilters = () => {
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
