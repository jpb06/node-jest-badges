export const getBadgeColor = (percentage: number) => {
  if (percentage < 80) return "red";
  if (percentage < 90) return "yellow";

  return "brightgreen";
};
