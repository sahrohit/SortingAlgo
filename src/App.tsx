import { Graph } from "./Components/Graph/Graph"
import { Header } from "./Components/Header/Header"
import { Flex } from "@chakra-ui/react"

function App() {
  return (
    <Flex
      height="100vh"
      overflowY="hidden"
      backgroundColor="rgb(34,32,32)"
      direction="column"
    >
      <Header />
      <Graph />
    </Flex>
  )
}

export default App
