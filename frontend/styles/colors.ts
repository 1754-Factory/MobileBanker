export const colors = {
  red: "rgba(242, 119, 118, ", //rgba(242, 119, 118)
  green: "rgba(82, 205, 133,", // rgba(82, 205, 133)
  yellow: "rgba(209, 183, 40,",
  pink: "rgba(255, 57, 156,",
  blue: "rgba(37, 97, 253,", //rgba(23, 23, 252),
  black: "rgba(0, 0, 0,",
  impactBlue: "rgba(38, 97, 254,", //rgba(38, 97, 254)
  disabled: "rgba(219, 216, 216,",
  gold: "rgba(193, 161, 48,",
  baby_blue: "rgba(33, 183, 204,",
  purple: "rgba(196, 42, 204,",
  salmon: "rgba(227, 154, 70,", //rgba(227, 154, 70)
  firetruck: "rgba(234, 73, 73,", //rgba(234, 73, 73)
  grey: "rgba(134, 134, 134,", // rgba(134, 134, 134)
  navy: "rgba(29, 69, 175,", //rgba(29, 69, 175)
  white: "rgba(255,255,255,",
  lightBlue: "rgba(221,238,255,", // rgba(221,238,255)
  lightGrey: "rgba(232,232,232,", // rgba(232,232,232)
  turquoise: "rgba(70,205,133,", // rgba(70,205,133)
};

type ColorNames = "red" | "green" | "yellow";

export function getColor(c: keyof colors, opacity: number): string {
  return `${colors[c]} ${opacity})`;
}
