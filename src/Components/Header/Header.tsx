import { Flex, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex
      minHeight="13vh"
      height="2rem"
      alignItems="center"
      justifyContent="center"
      color="rgb(104, 141, 177)"
    >
      <Heading fontSize="2xl">Visualize Sorting Algorithms</Heading>
    </Flex>
  )
}
