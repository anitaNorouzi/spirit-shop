import { colorsTuple, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "brand",
  primaryShade: 6,

  colors: {
    brand: colorsTuple("#7950F2"),
    magic_purple: colorsTuple("#9b87f5"),
    magic_deep_purple: colorsTuple("#7e69ab"),
    magic_light_purple: colorsTuple("#d6bcfa"),
    magic_soft_purple: colorsTuple("#9b87f5"),
    magic_blue: colorsTuple("#33c3f0"),
    magic_pink: colorsTuple("#d946ef"),

    element_fire: colorsTuple("#ff6b6b"),
    element_ice: colorsTuple("#fcceff"),
    element_electric: colorsTuple("#ffd43b"),
  },
});
