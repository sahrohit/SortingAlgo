export const mergeSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  mSort(arr, 0, arr.length - 1, wait, setState)
}

const merge = async (
  arr: number[],
  l: number,
  m: number,
  r: number,
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  const n1 = m - l + 1
  const n2 = r - m

  const L = new Array(n1)
  const R = new Array(n2)

  for (let w = 0; w < n1; w++) L[w] = arr[l + w]
  for (let q = 0; q < n2; q++) R[q] = arr[m + 1 + q]

  let i = 0
  let j = 0
  let k = l

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i]
      i++
      await wait(50)
      setState([...arr])
    } else {
      arr[k] = R[j]
      j++
      await wait(50)
      setState([...arr])
    }
    k++
  }

  while (i < n1) {
    arr[k] = L[i]
    i++
    k++
    await wait(50)
    setState([...arr])
  }

  while (j < n2) {
    arr[k] = R[j]
    j++
    k++
    await wait(50)
    setState([...arr])
  }
}

const mSort = async (
  arr: number[],
  l: number,
  r: number,
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>
): Promise<void> => {
  if (l >= r) {
    return
  }
  let m = Math.floor((l + r) / 2)
  await mSort(arr, l, m, wait, setState)
  await mSort(arr, m + 1, r, wait, setState)
  await merge(arr, l, m, r, wait, setState)
}
