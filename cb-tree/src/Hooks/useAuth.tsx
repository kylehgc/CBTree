import { useToast } from '@chakra-ui/react'
import {
	createContext,
	useEffect,
	useState,
	useContext,
	useCallback,
} from 'react'
import { isToken, Token, User } from '../types'
import { userEndPoint } from '../Utils/api'
import { getAuthHeader } from '../Utils/api'

interface AuthContext {
	login: (token: Token) => void
	logout: () => void
	currentUser: User | null | false
}

const authContext = createContext({} as AuthContext)

const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<User | null | false>(null)
	const toast = useToast()

	const logout = useCallback(() => {
		localStorage.removeItem('userToken')
		setCurrentUser(false)
		toast({
			status: 'success',
			description: 'Logged out...',
		})
	}, [toast])

	const getUser = useCallback(
		async (token: Token) => {
			if (!currentUser) {
				const response = await fetch(userEndPoint, {
					...getAuthHeader(),
				})
				if (response.ok) {
					const user = await response.json()
					if (!currentUser) {
						setCurrentUser(user)
					}
				} else {
					if (response.status === 401 || 403) {
						logout()
					}
				}
			}
		},
		[currentUser, logout],
	)

	useEffect(() => {
		if (currentUser === null) {
			const storageTokenString = localStorage.getItem('userToken')
			if (storageTokenString !== null) {
				const storageToken = JSON.parse(storageTokenString)
				if (isToken(storageToken)) {
					getUser(storageToken)
				}
			} else {
				setCurrentUser(false)
			}
		}
	}, [currentUser, getUser])

	const login = useCallback(
		(token: Token) => {
			localStorage.setItem('userToken', JSON.stringify(token))
			getUser(token)
		},
		[getUser],
	)

	return {
		currentUser,
		login,
		logout,
	}
}
export const AuthProvider: React.FC = ({ children }) => {
	const auth = useAuth()
	return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
export default function AuthConsumer() {
	return useContext(authContext)
}
