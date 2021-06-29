export const insertionSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let i = 1;
  while (i < arr.length) {
    while (arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
      await wait(200);
      setState([...arr]);
    }
    i++;
  }
};
