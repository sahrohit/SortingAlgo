export const quickSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  qSort(arr, 0, arr.length, wait, setState)
}

const qSort = async (
  arr: number[],
  low: number,
  high: number,
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  if (low < high) {
    let pi = await partition(arr, low, high, wait, setState)

    qSort(arr, low, pi - 1, wait, setState)
    qSort(arr, pi + 1, high, wait, setState)
  }
}

const partition = async (
  arr: number[],
  low: number,
  high: number,
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<number> => {
  let temp
  let pivot = arr[high]

  let i = low - 1

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      await wait(100)
      setState([...arr])
    }
  }

  temp = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = temp
  setState([...arr])

  return i + 1
}
