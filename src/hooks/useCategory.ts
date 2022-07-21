import useSWR from "swr"
import { add, read, update } from "../api/category";

const useCategory = () => {
  const { data, error, mutate } = useSWR("/category");
  const updateCategory = async (id: string, updateData: any) => {
    const updateItem = await update(id, updateData);
    const newCategory = data.map((item: any) => item._id == id ? updateItem : item);
    mutate(newCategory);
  };
  const addCategory = async (cateData: any) => {
    const newCate = await add(cateData);
    mutate([...data, newCate]);
  };
  // const getCategory = async (id: string) => {
  //   const category = await read(id).then(res=>);
  //   return category;
  // };
  return {
    data, error, updateCategory, addCategory
  }
}

export default useCategory