import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../Hooks/useAuth"
import { QueryClientProvider, QueryClient} from "react-query"
import theme from "./Theme"


const Providers: React.FC = ({children}) => {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Providers