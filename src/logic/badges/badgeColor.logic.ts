type BadgeColor = 'red' | 'yellow' | 'brightgreen';

export const getBadgeColor = (percentage: number): BadgeColor => {
  if (percentage < 80) {
    return 'red';
  }
  if (percentage < 90) {
    return 'yellow';
  }

  return 'brightgreen';
};
