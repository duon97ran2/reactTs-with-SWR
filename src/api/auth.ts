import { AuthRequest } from "../types/Auth";
import instance from "./instance"

export const login = (data: AuthRequest) => {
  return instance.post("login", data);
}
export const register = (data: AuthRequest) => {
  return instance.post("register", data);
}