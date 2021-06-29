import { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Bar } from "./Shared/Bar";
import { nanoid } from "nanoid";
import { wait } from "../Algos && Utils/Wait";
import { insertionSort } from "../Algos && Utils/InsertionSort";

export const Graph = () => {
  const arr: number[] = [10, 2, 4, 21, 8, 35, 22, 5, 31];
  const [state, setState] = useState<number[]>(arr);

  const handleSort = () => {
    insertionSort(arr, wait, setState);
  };

  return (
    <Flex
      height="40rem"
      mt="1rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex alignItems="flex-end">
        {state.map((item) => (
          <Bar key={nanoid()} height={item} />
        ))}
      </Flex>
      <Button mt="1rem" onClick={handleSort}>
        Sort
      </Button>
    </Flex>
  );
};
