import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Nav from './Components/Nav'
import { AuthProvider } from './Hooks/UseAuth'
import {
  Flex
} from "@chakra-ui/react"


import Login from './Components/LoginForm'
import Signup from './Components/Signup'



const MoodSlider = lazy(() => import('./Components/EmotionSlider'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))

export const App = () => (
  <AuthProvider>
    <Flex height='70vh' flexDirection="column">
      <Nav/>
      <Suspense fallback={<div> loading... </div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/situationquestion" element={<TextFieldQuestion/>}/>
            <Route path="/mood" element={<MoodSlider />} />
            <Route path="/evidencefor" element={<TextFieldQuestion/>} />
            <Route path="/evidenceagainst" element={<TextFieldQuestion key={"rerender"} />} />
            <Route path="/thoughts" element={<ThoughtQuestion/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
      </Suspense>
    </Flex>
  </AuthProvider>
)
