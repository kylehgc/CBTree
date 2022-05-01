import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import RequireAuth from './Components/RequireAuth'
import Nav from './Components/Nav'

import {
  Container,
} from "@chakra-ui/react"
import Providers from './Components/Providers'
import LoadingTextField from './Components/LoadingTextField'

const EmotionPicker = lazy(() => import('./Components/EmotionPicker'))
const ThoughtRecord = lazy(() => import('./Components/ThoughtRecord'))
const AlternativeThought = lazy(() => import('./Components/AlternativeThought'))
const Signup = lazy(() => import('./Components/Signup'))
const Login = lazy(() => import('./Components/LoginForm'))
const FeelingQuestion = lazy(() => import('./Components/FeelingQuestion'))
const TextFieldQuestion = lazy(() => import('./Components/TextFieldQuestion'))
const ThoughtQuestion = lazy(() => import ('./Components/ThoughtQuestion'))


export const App = () => (
  
  // <Router basename={process.env.PUBLIC_URL}>
  <Router>
    <Providers>
      <Container p={2} centerContent height='85vh' minWidth="100vw">
        <Nav/>
        <Suspense fallback={<LoadingTextField/>}>
          <Routes>
            <Route path="/emotion" element={<RequireAuth><EmotionPicker/></RequireAuth>} />
            <Route path="/" element={<Login/>} />
            <Route path="/rerateemotion" element={<RequireAuth><EmotionPicker/></RequireAuth>} />
            <Route path="/thoughtrecord" element={<RequireAuth><ThoughtRecord/> </RequireAuth>}/>
            <Route path="/situationquestion" element={<RequireAuth><TextFieldQuestion/> </RequireAuth> }/>
            <Route path="/mood" element={<RequireAuth><FeelingQuestion /></RequireAuth>} />
            <Route path="/evidencefor" element={<RequireAuth><TextFieldQuestion/></RequireAuth>} />
            <Route path="/evidenceagainst" element={<RequireAuth> <TextFieldQuestion /></RequireAuth>}/>
            <Route path="/thoughts" element={<RequireAuth><ThoughtQuestion/></RequireAuth>} />
            <Route path="/reratemoods" element={<RequireAuth> <FeelingQuestion/> </RequireAuth>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/alternativethought" element={<RequireAuth><AlternativeThought/></RequireAuth>} />
          </Routes>
        </Suspense>
      </Container>
    </Providers>
  </Router>

  
  
)
