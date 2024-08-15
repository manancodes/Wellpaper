export const theme: any = {
  colors: {
    white: "#fff",
    black: "#000",
    grayBG: "#e5e5e5",
    dark: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    neutral: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    charcoal: (opacity: number) => `rgba(10, 10, 10, ${opacity})`,
  },
  fontWeights: {
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
};
