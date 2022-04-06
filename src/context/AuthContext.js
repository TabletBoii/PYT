import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
  userID: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})