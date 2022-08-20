import { Flex, Divider, Text } from '@chakra-ui/react'
import {
	CredentialResponse,
	GoogleLogin,
	useGoogleOneTapLogin,
} from '@react-oauth/google'

const onSuccess = (credentialResponse: CredentialResponse) => {
	console.log(credentialResponse)
}
const onFailure = () => {
	console.log('error')
}

type Context = 'signin' | 'signup'
type ContextText = 'signin_with' | 'signup_with'
interface Props {
	context?: Context
	width?: string
	contextText?: ContextText
}
const GoogleSignIn: React.FC<Props> = ({
	width = '270',
	context = 'signin',
	contextText = 'signin_with',
}) => {
	return (
		<>
			<Flex justify={'center'} align={'center'}>
				<GoogleLogin
					shape="pill"
					size={'large'}
					useOneTap={true}
					text={contextText}
					context={context}
					width={width}
					onSuccess={onSuccess}
					theme="filled_blue"
					onError={onFailure}
				/>
			</Flex>
			<Flex marginY={7} align={'center'}>
				<Divider width={'50%'} marginRight={4} />
				<Text fontSize={'sm'} opacity={0.9}>
					OR
				</Text>
				<Divider width={'50%'} marginLeft={4} />
			</Flex>
		</>
	)
}

export default GoogleSignIn
