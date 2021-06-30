import React, { useState, useRef } from "react"
import { Flex, Button, Select, useToast } from "@chakra-ui/react"
import { Bar } from "./Shared/Bar"
import { nanoid } from "nanoid"
import { wait } from "../Algos && Utils/Wait"
import { insertionSort } from "../Algos && Utils/InsertionSort"
import { selectionSort } from "../Algos && Utils/SelectionSort"
import { quickSort } from "../Algos && Utils/QuickSort"

export const Graph = () => {
  const toast = useToast()

  const arr: number[] = Array.from({ length: 35 }, () =>
    Math.floor(Math.random() * 35 + 1)
  )

  const arrToSort = useRef(arr)

  const [state, setState] = useState<number[]>(arr)
  const [select, setSelect] = useState<string>("")

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

  return (
    <Flex
      minHeight="80vh"
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
        </Select>
        <Button
          mt="1rem"
          ml="1rem"
          onClick={handleSort}
          variant="outline"
          color="#ede5e5"
          _hover={{ bgColor: "white", color: "black" }}
          _focus={{}}
        >
          Sort
        </Button>
      </Flex>
    </Flex>
  )
}
