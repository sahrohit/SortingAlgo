import React, { useState } from "react"
import { Flex, Button, Select } from "@chakra-ui/react"
import { Bar } from "./Shared/Bar"
import { nanoid } from "nanoid"
import { wait } from "../Algos && Utils/Wait"
import { insertionSort } from "../Algos && Utils/InsertionSort"

export const Graph = () => {
  const arr: number[] = Array.from({ length: 35 }, () =>
    Math.floor(Math.random() * 35 + 1)
  )

  const [state, setState] = useState<number[]>(arr)
  const [select, setSelect] = useState<string>("")

  const handleSort = () => {
    insertionSort(arr, wait, setState)
  }

  console.log(select)

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
        </Select>
        <Button
          mt="1rem"
          ml="1rem"
          onClick={handleSort}
          variant="outline"
          color="#ede5e5"
          _hover={{ bgColor: "rbg(34,32,32)", filter: "brightness(1.5)" }}
          _focus={{}}
        >
          Sort
        </Button>
      </Flex>
    </Flex>
  )
}
