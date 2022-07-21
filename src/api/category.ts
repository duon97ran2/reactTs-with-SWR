import instance from "./instance";

export const update = (id: string, data: any) => {
  return instance.put(`/category/${id}`, data)
};
export const add = (data: any) => {
  return instance.post("/category", data)
}
export const read = (id: string) => {
  return instance.get(`/category/${id}`)
}
