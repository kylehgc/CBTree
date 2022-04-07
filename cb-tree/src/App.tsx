import * as React from "react"
import Logo from './Components/Logo'
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/react"

import theme from './Components/Theme'
import Login from './Components/Login'
// import Situation from './Components/SituationRecord'
// import Moods from './Components/MoodsRecord'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex height='80vh' overflow={'hidden'} flexDirection="column">
      <Logo/>
      <Login />
    </Flex>
  </ChakraProvider>
)
