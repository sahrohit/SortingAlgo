import { Box } from "@chakra-ui/react";
interface IProps {
  height: string;
}
export const Bar: React.FC<IProps> = ({ height }) => {
  return (
    <Box
      border="3px solid black"
      height={height}
      width="2rem"
      backgroundColor="blue.300"
    ></Box>
  );
};
