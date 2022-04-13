import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Logo from './Components/Logo'
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/react"

import theme from './Components/Theme'
import Login from './Components/Login'
import Signup from './Components/Signup'



const MoodSlider = lazy(() => import('./Components/EmotionSlider'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))


export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex height='70vh' overflow={{sm:'hidden', large:'show'}} flexDirection="column">
      <Logo/>
      <Suspense fallback={<div> loading... </div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/situationquestion" element={<TextFieldQuestion/>}/>
            <Route path="/mood" element={<MoodSlider />} />
            <Route path="/evidencefor" element={<TextFieldQuestion/>} />
            <Route path="/evidenceAgainst" element={<TextFieldQuestion/>} />
            <Route path="/thoughts" element={<ThoughtQuestion/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
      </Suspense>
    </Flex>
  </ChakraProvider>
)
