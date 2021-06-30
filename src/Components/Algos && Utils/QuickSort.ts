export const quickSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  if (arr.length < 2) return arr
  const pivot: number = arr[Math.floor(Math.random() * arr.length)]

  const less: number[] = arr.filter((item) => item < pivot)
  const more: number[] = arr.filter((item) => item >= pivot)

  await wait(100)

  setState([...less, pivot, ...more])
}
