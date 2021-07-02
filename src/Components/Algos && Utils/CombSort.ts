export const combSort = (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): void => {
  cSort(arr, wait, setState)
}

const getNextGap = (gap: number): number => {
  gap = (gap * 10) / 13
  if (gap < 1) return 1
  return gap
}

const cSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  let n: number = arr.length
  let gap: number = n
  let swapped: boolean = true

  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap)
    swapped = false

    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        let temp = arr[i]
        arr[i] = arr[i + gap]
        arr[i + gap] = temp
        await wait(80)
        setState([...arr])

        swapped = true
      }
    }
  }
}
