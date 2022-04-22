
import { useToast } from "@chakra-ui/react"
import { createContext, useEffect, useState,useContext } from "react"
import { getAuthHeader, getUserEndPoint, thoughtRecordEndPoint } from "../utils/api"


export interface Token {
  access_token: string,
  token_type: 'bearer'
}



export interface User {
  activeThoughtRecord: string | null,
  thoughtRecords: string[],
  username: string,
  firstName?: string
  lastName?: string
}

interface AuthContext {
  login: (token: Token) => void
  logout: () => void,
  currentUser: User | null,
  getUser: (token: Token) => void,
}

export const isAnToken = (obj: any): obj is Token => {
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
  
  
  const login = async (token:Token) => {
    setToken(token)
    localStorage.setItem("userToken", JSON.stringify(token))
    await getUser(token)
  }

  const storageTokenString = localStorage.getItem("userToken")
  if(storageTokenString !== null) {
    const storageToken = JSON.parse(storageTokenString)
    if(isAnToken(storageToken)) {
      if(!token) {
        setToken(storageToken)
      }
      if(!currentUser) {
        getUser(storageToken)
      }
    }}
  
   

  
  
  return {
    currentUser,
    login,
    logout,
    getUser
  }
}

export const AuthProvider:React.FC = ({ children }) => {
  const auth = useAuth();
  console.log(auth)
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export default function AuthConsumer() {
  return useContext(authContext);
}




