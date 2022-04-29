import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../Hooks/useAuth"
import theme from "./Theme"


const Providers: React.FC = ({children}) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ChakraProvider>
  )
}

export default Providers