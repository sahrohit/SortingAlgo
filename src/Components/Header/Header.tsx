import { Flex, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex
      minHeight="13vh"
      height="2rem"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Heading fontSize="2xl">Visualize Sorting Algorithms</Heading>
    </Flex>
  )
}
