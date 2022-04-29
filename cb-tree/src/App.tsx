import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import RequireAuth from './Components/RequireAuth'
import Nav from './Components/Nav'

import {
  Container,
} from "@chakra-ui/react"




import Providers from './Components/Providers'
import BalancedThought from './Components/BalancedThought'
import LoadingTextField from './Components/LoadingTextField'

const Signup = lazy(() => import('./Components/Signup'))
const Login = lazy(() => import('./Components/LoginForm'))
const FeelingQuestion = lazy(() => import('./Components/FeelingQuestion'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))


export const App = () => (
  
  // <Router basename={process.env.PUBLIC_URL}>
  <Router>
    <Providers>

      <Container p={2} centerContent height='85vh' minHeight='80vh' width="100%">
        <Nav/>
        <Suspense fallback={<LoadingTextField/>}>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/situationquestion" element={<RequireAuth><TextFieldQuestion/> </RequireAuth> }/>
            <Route path="/mood" element={<RequireAuth><FeelingQuestion /></RequireAuth>} />
            <Route path="/evidencefor" element={<RequireAuth><TextFieldQuestion/></RequireAuth>} />
            <Route path="/evidenceagainst" element={<RequireAuth> <TextFieldQuestion /></RequireAuth>}/>
            <Route path="/thoughts" element={<RequireAuth><ThoughtQuestion/></RequireAuth>} />
            <Route path="/reratemoods" element={<RequireAuth> <FeelingQuestion/> </RequireAuth>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/alternativethought" element={<RequireAuth><BalancedThought/></RequireAuth>} />
          </Routes>
        </Suspense>
      </Container>
    </Providers>
  </Router>

  
  
)
