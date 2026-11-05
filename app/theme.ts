import { colorsTuple, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "brand",
  primaryShade: 6,

  colors: {
    brand: colorsTuple("#7950F2"),
    danger: colorsTuple("#FF1654"),
    success: colorsTuple("#00B58A"),
    ocean: colorsTuple("#118AD3"),
  },
});
