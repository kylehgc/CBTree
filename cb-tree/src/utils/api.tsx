const BASEURL = "https://7astgo.deta.dev/"

type Endpoints = {
  [key: string]: URL
}

const endpoints: Endpoints = {
  getUser: new URL(`${BASEURL}user`),
  login: new URL(`${BASEURL}auth/token`),
  signup: new URL(`${BASEURL}user`)
}
export const getUserEndPoint = endpoints.getUser.href
export const loginEndpoint = endpoints.login.href
export const signupEndPoint = endpoints.signup.href