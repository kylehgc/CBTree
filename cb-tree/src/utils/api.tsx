import { isToken } from '../Hooks/useAuth'

const BASEURL = 'https://7astgo.deta.dev/'

type Endpoints = {
	[key: string]: URL
}

export const getToken = () => {
	const storageTokenString = localStorage.getItem('userToken')
	if (storageTokenString !== null) {
		const storageToken = JSON.parse(storageTokenString)
		if (isToken(storageToken)) {
			return storageToken
		} else return null
	}
	return null
}

const endpointsUrl: Endpoints = {
	getUser: new URL(`${BASEURL}user`),
	login: new URL(`${BASEURL}auth/token`),
	signup: new URL(`${BASEURL}user`),
	thoughtRecord: new URL(`${BASEURL}thoughtrecord`),
}

export const getAuthHeader = () => {
	const token = getToken()
	if (token) {
		return {
			headers: { Authorization: `${token.token_type} ${token.access_token}` },
		}
	}
	throw Error('no valid token')
}

export const userEndPoint = endpointsUrl.getUser.href
export const loginEndpoint = endpointsUrl.login.href
export const signupEndPoint = endpointsUrl.signup.href
export const thoughtRecordEndPoint = endpointsUrl.thoughtRecord.href
