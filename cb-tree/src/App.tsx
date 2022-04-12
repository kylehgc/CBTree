import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logo from './Components/Logo'
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/react"

import theme from './Components/Theme'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ThoughtQuestion from './Components/ThoughtQuestion'
import MoodSlider from './Components/EmotionSlider'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex height='70vh' overflow={{sm:'hidden', large:'show'}} flexDirection="column">
      <Logo/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/mood" element={<MoodSlider />} />
          <Route path="/thoughts" element={<ThoughtQuestion/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </Flex>
  </ChakraProvider>
)
