
import { useToast } from "@chakra-ui/react"
import { createContext, useEffect, useState,useContext, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { getUserEndPoint, } from "../utils/api"


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
  currentUser: User | null
}

export const isAnToken = (obj: any): obj is Token => {
  return obj.token_type === 'bearer' && 'access_token' in obj
}

const authContext = createContext({} as AuthContext)

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const navigate = useNavigate() 
  const toast = useToast()

  const logout = useCallback(() => {
    localStorage.removeItem("userToken")
    setCurrentUser(null)
    toast({
      status: "success",
      description: "Logged out..."
    })
    
  },[toast]) 
  
  const getUser = useCallback(async (token: Token) => {
    if(!currentUser) {
      const response = await fetch(getUserEndPoint, {
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`
        }
      })
      if(response.ok) {
        const user = await response.json()
        if(!currentUser) {
          setCurrentUser(user)
        }
      } else {
        if(response.status === 401 || 403) {
          logout()
          
        }
      }
    }
  },[currentUser, logout])
  
  useEffect(() => {
    if(!currentUser) {
      const storageTokenString = localStorage.getItem("userToken")
      if(storageTokenString !== null) {
        const storageToken = JSON.parse(storageTokenString)
        if(isAnToken(storageToken)) {
          getUser(storageToken)
        }
      }}
  },[currentUser, getUser])
  
  const login = useCallback((token:Token) => {
    localStorage.setItem("userToken", JSON.stringify(token))
    getUser(token)
  },[getUser])

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




