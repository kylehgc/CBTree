import { Box, Stack, Link, Button, Heading, useToast } from '@chakra-ui/react'
import useAuth from '../../Hooks/useAuth'
import { useForm, SubmitHandler } from 'react-hook-form'
import { loginEndpoint } from '../../Utils/api'
import UserPassFormElements from './UserPassFormElements'
import UseThemeColors from '../../Hooks/useThemeColors'
import { useEffect } from 'react'
import { useNavigate, Link as BrowserLink, useLocation } from 'react-router-dom'
import LoadingTextField from '../Loading/LoadingTextField'
import { Token } from '../../types'

interface FormValues {
	username: string
	password: string
}
type LocationState = {
	state: {
		path: string
	}
}

const Login: React.FC = () => {
	const toast = useToast()
	const { login, currentUser } = useAuth()
	const { foregroundColor, backgroundColor, linkColor } = UseThemeColors()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>()
	const navigate = useNavigate()
	const { state } = useLocation() as LocationState

	useEffect(() => {
		if (currentUser) {
			navigate(state?.path || '/emotion')
		}
	}, [currentUser, navigate, state?.path])

	const onSubmit: SubmitHandler<FormValues> = async (value) => {
		try {
			const response = await fetch(loginEndpoint, {
				body: new URLSearchParams({ ...value }),
				method: 'POST',
				mode: 'cors',
			})
			if (response.status === 200) {
				const token: Token = await response.json()

				toast({
					status: 'success',
					description: 'Logged in.  Redirecting...',
				})
				await login(token)
			} else {
				throw new Error('Incorrect Username or Password')
			}
		} catch (error) {
			if (error instanceof Error) {
				toast({
					status: 'error',
					description: error.message,
				})
			}
		}
	}
	console.log(currentUser)
	if (currentUser === null) {
		return <LoadingTextField />
	}
	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} maxH={'100%'} py={12} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'}>Sign in to your account</Heading>
			</Stack>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box rounded={'lg'} bg={foregroundColor} boxShadow={'lg'} p={8}>
					<UserPassFormElements register={register} errors={errors} />
					<Stack spacing={8}>
						<Stack
							direction={{ base: 'column', sm: 'row' }}
							align={'start'}
							spacing={4}
							justify={'space-between'}
						>
							<Link as={BrowserLink} color={linkColor} to={'/forgotpassword'}>
								Forgot password?
							</Link>
						</Stack>
						<Button
							type={'submit'}
							isLoading={isSubmitting}
							loadingText={'Submitting'}
							variant={'loginSubmit'}
							textColor={'white'}
							bg={backgroundColor}
							sx={{ _hover: { _disabled: { bg: backgroundColor } } }}
						>
							Sign in
						</Button>
						<Link
							as={BrowserLink}
							to="/signup"
							textAlign={'center'}
							color={linkColor}
						>
							New User? Sign up here!
						</Link>
					</Stack>
				</Box>
			</form>
		</Stack>
	)
}
export default Login