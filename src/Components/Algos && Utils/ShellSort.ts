export const shellSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const gaps = [66, 31, 14, 5, 1]
  for (let gap of gaps) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i]
      let j

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap]
        await wait(70)
        setState([...arr])
      }

      arr[j] = temp
      await wait(70)
      setState([...arr])
    }
  }
}
