import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import RequireAuth from './Components/RequireAuth'
import Nav from './Components/Nav'

import {
  Container,
} from "@chakra-ui/react"




import Providers from './Components/Providers'
import Loading from './Components/Loading'
import BalancedThought from './Components/BalancedThought'

const Signup = lazy(() => import('./Components/Signup'))
const Login = lazy(() => import('./Components/LoginForm'))
const MoodSlider = lazy(() => import('./Components/FeelingQuestion'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))


export const App = () => (
  
  <Providers>
    <Router basename={process.env.PUBLIC_URL}>
      <Container p={2} centerContent height='80vh' width="100%">
        <Nav/>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/Loading" element={<Loading/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/situationquestion" element={<RequireAuth><TextFieldQuestion/> </RequireAuth> }/>
            <Route path="/mood" element={<RequireAuth><MoodSlider /></RequireAuth>} />
            <Route path="/evidencefor" element={<RequireAuth><TextFieldQuestion/></RequireAuth>} />
            <Route path="/evidenceagainst" element={<RequireAuth> <TextFieldQuestion key={"rerender"}/></RequireAuth>}/>
            <Route path="/thoughts" element={<RequireAuth><ThoughtQuestion/></RequireAuth>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/balanced" element={<RequireAuth><BalancedThought/></RequireAuth>} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  </Providers>
  
  
)
