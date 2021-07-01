export const selectionSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let i = 0
  while (i < arr.length) {
    let min = i
    let j = i + 1
    while (j < arr.length) {
      if (arr[min] > arr[j]) min = j
      j++
    }
    if (i !== min) {
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      await wait(100)
      setState([...arr])
    }
    i++
  }
}
