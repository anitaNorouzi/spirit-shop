import { MAGICAL_TYPES } from "./constants";
const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};

export default getMagicalTypeIcon;
