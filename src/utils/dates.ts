export function yearsTogether(): number {
  const current = new Date();
  return current.getMonth() > 10 || (current.getMonth() === 10 && current.getDate() >= 22)
    ? current.getFullYear() - 2023
    : current.getFullYear() - 2024;
}
