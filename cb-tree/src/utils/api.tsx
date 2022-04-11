const BASEURL = "https://7astgo.deta.dev/"

type Endpoints = {
  [key: string]: URL
}

const endpoints: Endpoints = {
  login: new URL(`${BASEURL}token`),
  signup: new URL(`${BASEURL}user`)
}

export const login = endpoints.login.href
export const signup = endpoints.signup.href