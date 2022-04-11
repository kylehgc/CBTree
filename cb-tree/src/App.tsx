import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logo from './Components/Logo'
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/react"

import theme from './Components/Theme'
import Login from './Components/Login'
import Signup from './Components/Signup'
// import Situation from './Components/SituationRecord'
// import Moods from './Components/MoodsRecord'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex height='70vh' overflow={{sm:'hidden', large:'show'}} flexDirection="column">
      <Logo/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </Flex>
  </ChakraProvider>
)
