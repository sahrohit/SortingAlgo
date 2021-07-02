export const radixSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const maxNum = Math.max(...arr) * 10
  let divisor = 10

  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => [])
    for (let num of arr) {
      //@ts-expect-error
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num)
      arr = [].concat.apply([], buckets)
      await wait(200)
      setState([...arr])
    }
    arr = [].concat.apply([], buckets)
    await wait(200)
    setState([...arr])
    divisor *= 10
  }
}
