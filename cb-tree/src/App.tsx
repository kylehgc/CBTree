import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import RequireAuth from './Components/Authorization/RequireAuth'
import Nav from './Components/Nav/Nav'

import { Container } from '@chakra-ui/react'
import Providers from './Components/Providers'
import LoadingTextField from './Components/Loading/LoadingTextField'
import Profile from './Components/Profile'
import ThoughtRecordExplination from './Components/ThoughtRecordExplination'

const PasswordReset = lazy(
	() => import('./Components/Authorization/PasswordReset'),
)
const ForgotPassword = lazy(
	() => import('./Components/Authorization/ForgotPassword'),
)
const EmotionPicker = lazy(
	() => import('./Components/ThoughtRecordQuestions/EmotionPicker'),
)
const SubmitThoughtRecord = lazy(
	() => import('./Components/ThoughtRecordQuestions/SubmitThoughtRecord'),
)
const AlternativeThought = lazy(
	() => import('./Components/ThoughtRecordQuestions/AlternativeThought'),
)
const Signup = lazy(() => import('./Components/Authorization/Signup'))
const Login = lazy(() => import('./Components/Authorization/LoginForm'))
const FeelingQuestion = lazy(
	() => import('./Components/ThoughtRecordQuestions/FeelingQuestion'),
)
const TextFieldQuestion = lazy(
	() => import('./Components/ThoughtRecordQuestions/TextFieldQuestion'),
)

const ThoughtQuestion = lazy(
	() => import('./Components/ThoughtRecordQuestions/ThoughtQuestion'),
)

export const App = () => (
	// <Router basename={process.env.PUBLIC_URL}>
	<Router>
		<Providers>
			<Container p={2} centerContent minH={'70vh'} width="100vw">
				<Nav />
				<Suspense fallback={<LoadingTextField />}>
					<Routes>
						<Route path="/about" element={<ThoughtRecordExplination />} />
						<Route
							path="/profile"
							element={
								<RequireAuth>
									<Profile />
								</RequireAuth>
							}
						/>
						<Route path="/reset/:resetKey" element={<PasswordReset />} />
						<Route path="/forgotpassword" element={<ForgotPassword />} />
						<Route
							path="/emotion"
							element={
								<RequireAuth>
									<EmotionPicker />
								</RequireAuth>
							}
						/>
						<Route path="/" element={<Login />} />
						<Route
							path="/rerateemotion"
							element={
								<RequireAuth>
									<EmotionPicker />
								</RequireAuth>
							}
						/>
						<Route
							path="/submit"
							element={
								<RequireAuth>
									<SubmitThoughtRecord />
								</RequireAuth>
							}
						/>
						<Route
							path="/situationquestion"
							element={
								<RequireAuth>
									<TextFieldQuestion />
								</RequireAuth>
							}
						/>
						<Route
							path="/mood"
							element={
								<RequireAuth>
									<FeelingQuestion />
								</RequireAuth>
							}
						/>
						<Route
							path="/evidencefor"
							element={
								<RequireAuth>
									<TextFieldQuestion />
								</RequireAuth>
							}
						/>

						<Route
							path="/evidenceagainst"
							element={
								<RequireAuth>
									<TextFieldQuestion key="rerender" />
								</RequireAuth>
							}
						/>
						<Route
							path="/thoughts"
							element={
								<RequireAuth>
									<ThoughtQuestion />
								</RequireAuth>
							}
						/>
						<Route
							path="/reratemoods"
							element={
								<RequireAuth>
									<FeelingQuestion />
								</RequireAuth>
							}
						/>
						<Route path="/signup" element={<Signup />} />
						<Route
							path="/alternativethought"
							element={
								<RequireAuth>
									<AlternativeThought />
								</RequireAuth>
							}
						/>
					</Routes>
				</Suspense>
			</Container>
		</Providers>
	</Router>
)
