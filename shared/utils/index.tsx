import { MAGICAL_TYPES } from "./constants";

const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};

export default getMagicalTypeIcon;
export const getFilterPillColor = (id: string) => {
  return id === "fire"
    ? "from-element-fire/20"
    : id === "ice"
      ? "from-element-ice/20"
      : id === "electric"
        ? "from-element-electric/20"
        : "from-magic-purple/20";
};

const isDev = process.env.NODE_ENV === "development";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const ORIGIN_URL =
  configuredOrigin ||
  (isDev
    ? "http://localhost:3001"
    : "https://open-source-spirit-shop.vercel.app");
