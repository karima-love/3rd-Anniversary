const base = import.meta.env.BASE_URL;
export const photos = {
  firstYear: `${base}assets/images/year-1.jpeg`,
  secondYear: `${base}assets/images/year-2.jpeg`,
  thirdYear: `${base}assets/images/year-3.jpeg`,
  forever: `${base}assets/images/forever.jpeg`,
} as const;
