import { useState, useRef } from "react"
import { Flex, Text, Button, Select, useToast, Link } from "@chakra-ui/react"
import { Bar } from "./Shared/Bar"
import { nanoid } from "nanoid"
import { wait } from "../Algos && Utils/Wait"
import { insertionSort } from "../Algos && Utils/InsertionSort"
import { selectionSort } from "../Algos && Utils/SelectionSort"
import { quickSort } from "../Algos && Utils/QuickSort"
import { mergeSort } from "../Algos && Utils/MergeSort"
import { bubbleSort } from "../Algos && Utils/BubbleSort"
import { heapSort } from "../Algos && Utils/HeapSort"
import { shellSort } from "../Algos && Utils/ShellSort"
import { combSort } from "../Algos && Utils/CombSort"
import { radixSort } from "../Algos && Utils/RadixSort"

export const Graph = () => {
  let arr: number[] = Array.from({ length: 35 }, () =>
    Math.floor(Math.random() * 35 + 1)
  )

  const toast = useToast()
  const [state, setState] = useState<number[]>(arr)
  const [select, setSelect] = useState<string>("")

  const arrToSort = useRef(arr)

  const handleSort = () => {
    if (select) {
      switch (select) {
        case "Insertion":
          insertionSort(arrToSort.current, wait, setState)
          break

        case "Selection":
          selectionSort(arrToSort.current, wait, setState)
          break

        case "Quick":
          quickSort(arrToSort.current, wait, setState)
          break

        case "Merge":
          mergeSort(arrToSort.current, wait, setState)
          break

        case "Bubble":
          bubbleSort(arrToSort.current, wait, setState)
          break

        case "Heap":
          heapSort(arrToSort.current, wait, setState)
          break

        case "Shell":
          shellSort(arrToSort.current, wait, setState)
          break

        case "Comb":
          combSort(arrToSort.current, wait, setState)
          break

        case "Radix":
          radixSort(arrToSort.current, wait, setState)
          break

        default:
          break
      }
    } else
      toast({
        title: "Please Select a Algorithm",
        position: "top-right",
        status: "error",
        duration: 1500,
        isClosable: true,
      })
  }

  const newArray = () => {
    arr = Array.from({ length: 35 }, () => Math.floor(Math.random() * 35 + 1))
    arrToSort.current = arr
    setState([...arr])
  }

  return (
    <Flex
      minHeight="85vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex alignItems="flex-end">
        {state.map((item) => (
          <Bar key={nanoid()} height={item} />
        ))}
      </Flex>
      <Flex>
        <Select
          mr="1rem"
          mt="1rem"
          variant="outline"
          color="#ede5e5"
          _focus={{}}
          placeholder="Select an algorithm"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelect(e.target.value)
          }
        >
          <option value="Insertion">Insertion Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Quick">Quick Sort</option>
          <option value="Merge">Merge Sort</option>
          <option value="Bubble">Bubble Sort</option>
          <option value="Heap">Heap Sort</option>
          <option value="Shell">Shell Sort</option>
          <option value="Comb">Comb Sort</option>
          <option value="Radix">Radix Sort</option>
        </Select>
        <Button
          mt="1rem"
          mr="1rem"
          padding="0 2rem"
          variant="outline"
          color="#ede5e5"
          onClick={() => newArray()}
          _hover={{ bgColor: "white", color: "black" }}
          _focus={{}}
        >
          New Array
        </Button>
        <Button
          mt="1rem"
          onClick={handleSort}
          variant="outline"
          color="#ede5e5"
          _hover={{ bgColor: "white", color: "black" }}
          _focus={{}}
        >
          Sort
        </Button>
      </Flex>
      <Text fontSize="12" color="rgb(154,153,152)" mt="1rem">
        Not indicative of real world performance. Array size is too low to make
        a difference and there is a 100ms wait on every swap.{" "}
        <Link
          color="blue.400"
          href="https://github.com/Sang-it/SortingAlgo"
          target="blank"
        >
          Source Code
        </Link>
      </Text>
    </Flex>
  )
}
