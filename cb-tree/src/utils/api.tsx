type Endpoints = {
  [key: string]: URL
}



const endpoints: Endpoints = {
  login: new URL("https://7astgo.deta.dev/token")
}

export const login = endpoints.login.href