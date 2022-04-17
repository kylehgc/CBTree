import { useToast } from "@chakra-ui/react"
import React,{ createContext, useState } from "react"
import {loginEndpoint} from "../utils/api"


interface AuthContext {
  authed: Boolean;
  login: (value: FormValues) => Promise<void>;
  logout: () => void;
}
const authContext = React.createContext({} as AuthContext)

interface FormValues {
  username: string,
  password: string
}

interface Token {
  access_token: string,
  tokenType: 'bearer'
}
const useAuth = () => {
  const [authed,isAuthed] = useState<Boolean>(false)
  const [token, setToken] = useState<Token>()
  const toast = useToast()

  const logout = () => {
  }
  const login = async (value: FormValues) => {
  
    try{
      const response = await fetch(loginEndpoint, {
        body: new URLSearchParams({...value}),
        method: "POST",
        mode: "cors",
    
      })
      if(response.status === 200) {
        setToken(await response.json()) 
        toast({
          status: 'success',
          description: "Login successful.  Redirecting..."
      
        })
      } else {
        throw new Error("Incorrect Username or Password")
      }
    } catch (error) {
      if(error instanceof Error) {   
        toast({
          status: 'error',
          description: error.message
        })
      }
  
    }
  }

  return {
    authed,
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

