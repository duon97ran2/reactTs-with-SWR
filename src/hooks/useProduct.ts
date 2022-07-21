import useSWR from 'swr';
import { add, update } from '../api/product';
import { requestProduct } from '../types/products';

const useProduct = () => {
  const { data, error, mutate } = useSWR("/products");
  const productUpdate = async (id: string, productData: requestProduct) => {
    const product = await update(id, productData);
    const newProducts = data.map((item: any) => item._id != id ? item : product)
    mutate(newProducts);
  }
  const productAdd = async (productData: requestProduct) => {
    const product = await add(productData);
    mutate([...data, product]);
  }
  return {
    data, error, productAdd, productUpdate
  }
}

export default useProduct;