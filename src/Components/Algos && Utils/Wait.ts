export const wait = (ms: number): Promise<null> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
