export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 1677795841215)
    .toString(16)
    .padStart(6, 0)}`;
};