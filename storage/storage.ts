export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = <E = string>(key: string) => {
  const value = localStorage.getItem(key)
  return value ? (JSON.parse(value) as E) : null
}

export interface User {
  uuid: string
  username: string
  email: string
  bio: string
}

export const loginUser = (user: User) => {
  setLocalStorage('user', user)
}

export const getUser = (): User | null => {
  return getLocalStorage('user')
}

export const deleteUser = () => {
  localStorage.removeItem('user')
}
