import { Box } from "@chakra-ui/react";
interface IProps {
  height: number;
}

export const Bar: React.FC<IProps> = ({ height }) => {
  const barHeight = height.toString() + "rem";
  return (
    <Box
      border="3px solid black"
      height={barHeight}
      width="2rem"
      backgroundColor="blue.400"
    ></Box>
  );
};
