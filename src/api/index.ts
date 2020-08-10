export const getAllCities = async () => {
  const data = await import("./data/allCities.json");
  return data.default.slice(0, 3000);
};
