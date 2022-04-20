
import { useToast } from "@chakra-ui/react"
import { createContext, useEffect, useState,useContext } from "react"
import { getUserEndPoint } from "../utils/api"

export interface Token {
  access_token: string,
  token_type: 'bearer'
}



interface User {
  username: string,
  firstName?: string
  lastName?: string
}

interface AuthContext {
  login: (token: Token) => void
  logout: () => void,
  currentUser: User | null
}

const isAnToken = (obj: any): obj is Token => {
  return obj.token_type === 'bearer' && 'access_token' in obj
}

const authContext = createContext({} as AuthContext)

const useAuth = () => {
  
  const [token, setToken] = useState<Token>()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const toast = useToast()

  const logout = () => {
    localStorage.removeItem("userToken")
    setCurrentUser(null)
    toast({
      status: "success",
      description: "Logged out..."
    })
    
    
  }
  const getUser = async (token: Token) => {
    const response = await fetch(getUserEndPoint, {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`
      }
    })
    if(response.ok) {
      const user = await response.json()
      setCurrentUser(user)
    } else {
      if(response.status === 401 || 403) {
        logout()
      }
    }
    

    
  }
  useEffect (() => {
    const storageTokenString = localStorage.getItem("userToken")
    if(storageTokenString !== null) {
      const storageToken = JSON.parse(storageTokenString)
      if(isAnToken(storageToken)) {
       
        getUser(storageToken)
      } else {
        logout()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]) 

  
  const login = async (token:Token) => {
    
    setToken(token)
    localStorage.setItem("userToken", JSON.stringify(token))
    getUser(token)
  }
  
  
  
  return {
    currentUser,
    login,
    logout
  }
}

export const AuthProvider:React.FC = ({ children }) => {
  const auth = useAuth();
  
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}




