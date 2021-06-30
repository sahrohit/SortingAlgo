import { Graph } from "./Components/Graph/Graph"
import { Header } from "./Components/Header/Header"
import { Flex } from "@chakra-ui/react"

function App() {
  return (
    <Flex backgroundColor="rgb(34,32,32)" direction="column" height="100vh">
      <Header />
      <Graph />
    </Flex>
  )
}

export default App
