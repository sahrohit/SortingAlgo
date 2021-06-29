import { Flex } from "@chakra-ui/layout";
import { Bar } from "./Shared/Bar";

export const Graph = () => {
  return (
    <Flex justifyContent="space-around">
      <Bar height="20rem"></Bar>
      <Bar height="10rem"></Bar>
      <Bar height="8rem"></Bar>
      <Bar height="2rem"></Bar>
      <Bar height="3rem"></Bar>
    </Flex>
  );
};
