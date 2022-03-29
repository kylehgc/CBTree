import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import ThoughtRecord from "./Components/ThoughtRecord"
import theme from './Components/Theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <ThoughtRecord />
  </ChakraProvider>
)
