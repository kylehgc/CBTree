import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../Hooks/useAuth'
import '@fontsource/inter/400.css'
import theme from '../Theme/Theme'

const Providers: React.FC = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<AuthProvider>{children}</AuthProvider>
		</ChakraProvider>
	)
}

export default Providers
