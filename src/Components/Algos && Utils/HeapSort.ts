export const heapSort = (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  hSort(arr, wait, setState)
}

const hSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let n = arr.length

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    await heapify(arr, n, i, wait, setState)

  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    await wait(100)
    setState([...arr])

    await heapify(arr, i, 0, wait, setState)
  }
}

const heapify = async (
  arr: number[],
  n: number,
  i: number,
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let largest = i
  let l = 2 * i + 1
  let r = 2 * i + 2

  if (l < n && arr[l] > arr[largest]) largest = l
  if (r < n && arr[r] > arr[largest]) largest = r

  if (largest !== i) {
    let swap = arr[i]
    arr[i] = arr[largest]
    arr[largest] = swap
    await wait(100)
    setState([...arr])

    await heapify(arr, n, largest, wait, setState)
  }
}
