import { useQuery, useToast } from "@chakra-ui/react"
import React,{ createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export interface Token {
  access_token: string,
  tokenType: 'bearer'
}



interface User {
  userName: string
  firstName?: string
  lastName?: string
}

interface AuthContext {
  authed: Boolean,
  login: (token: Token) => void
  logout: () => void,
  user: User
}



const authContext = React.createContext({} as AuthContext)

const useAuth = () => {
  const { data } = useQuery()
  const [token, setToken] = useState<Token>
  const [authed,setAuthed] = useState<Boolean>(false)
  const [currentUser, setCurrentUser] = useState<User>()
  const navigate = useNavigate()

  const login = async (token:Token) => {
    setToken(token)
  }

  const logout = () => {
  }
  
  
  return {
    authed,
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
  return React.useContext(authContext);
}

