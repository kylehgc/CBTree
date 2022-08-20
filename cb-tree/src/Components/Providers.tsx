import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../Hooks/useAuth'
import '@fontsource/inter/400.css'
import theme from '../Theme/Theme'
import { GoogleOAuthProvider } from '@react-oauth/google'
const clientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID

const Providers: React.FC = ({ children }) => {
	return (
		<GoogleOAuthProvider clientId={clientId ? clientId : ''}>
			<ChakraProvider theme={theme}>
				<AuthProvider>{children}</AuthProvider>
			</ChakraProvider>
		</GoogleOAuthProvider>
	)
}

export default Providers
