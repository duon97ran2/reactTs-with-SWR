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
export const getByCategory = (id: string) => {
  return instance.get(`/products/category/${id}`)
}
export const getProductFilter = (text: string) => {
  return instance.get(`/products?`)
}
export const getSearchProduct = (text: string) => {
  return instance.get(`/search?q=${text}`)
}