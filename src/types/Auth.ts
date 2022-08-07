export type AuthRequest = {
  email: string,
  password: string,
  number?: string
}

export type AuthResponse = {
  email: string,
  role: number,
  avatar: Array<string>,
  phone: string,
  username: string,
  status: number
}