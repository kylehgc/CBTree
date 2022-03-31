import * as React from "react"
import Logo from './Components/Logo'
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/react"

import Situation from "./Components/SituationRecord"
import theme from './Components/Theme'
import Moods from './Components/MoodsRecord'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex height='80vh' overflow='hidden' flexDirection="column">
      <Logo/>
      <Moods />
    </Flex>
  </ChakraProvider>
)
