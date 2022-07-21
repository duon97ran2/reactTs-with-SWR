import instance from "./instance"

export const getAll = () => {
  return instance.get("/products");
}
export const getOne = (id: string) => {
  return instance.get(`/products/${id}`);
}
export const add = (data: any) => {
  return instance.post("/products", data);
}
export const update = (id: string, data: any) => {
  return instance.put(`/products/${id}`, data);
}
