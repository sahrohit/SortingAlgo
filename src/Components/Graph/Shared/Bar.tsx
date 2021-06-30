import { Flex } from "@chakra-ui/react"
interface IProps {
  height: number
}

export const Bar: React.FC<IProps> = ({ height }) => {
  const barHeight: string = (height + 1).toString() + "rem"
  return (
    <Flex
      justifyContent="center"
      height={barHeight}
      fontWeight="bold"
      margin="0 0.09rem"
      width="2rem"
      color="white"
      backgroundColor="blue.500"
    >
      {height}
    </Flex>
  )
}
