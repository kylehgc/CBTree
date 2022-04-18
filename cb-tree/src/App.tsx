import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Nav from './Components/Nav'
import { ReactQueryDevtools} from 'react-query/devtools'
import {
  Container,
  Flex
} from "@chakra-ui/react"




import Providers from './Components/Providers'
import Loading from './Components/Loading'

const Signup = lazy(() => import('./Components/Signup'))
const Login = lazy(() => import('./Components/LoginForm'))
const MoodSlider = lazy(() => import('./Components/EmotionSlider'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))

export const App = () => (
  
  <Providers>
    <Router>
      <Container p={2} centerContent height='87vh'>
        <Nav/>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/Loading" element={<Loading/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/situationquestion" element={<TextFieldQuestion/>}/>
            <Route path="/mood" element={<MoodSlider />} />
            <Route path="/evidencefor" element={<TextFieldQuestion/>} />
            <Route path="/evidenceagainst" element={<TextFieldQuestion key={"rerender"} />} />
            <Route path="/thoughts" element={<ThoughtQuestion/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  </Providers>
  
  
)
