import { message } from 'antd';
import { getByCategory } from './../api/product';
import useSWR from 'swr';
import { add, update } from '../api/product';
import { requestProduct } from '../types/products';

const useProduct = () => {
  const { data, error, mutate } = useSWR("/products");
  const productUpdate = async (id: string, productData: requestProduct) => {
    const product = await update(id, productData);
    const newProducts = data.map((item: any) => { return (item._id != id) ? item : product });
    mutate(newProducts, false);
    message.success("Cập nhật sản phẩm thành công");
  }
  const productAdd = async (productData: requestProduct) => {
    const product = await add(productData);
    mutate([...data, product]);
    message.success("Thêm sản phẩm thành công");

  }
  const getProductByCategory = async (id: string) => {
    const products = await getByCategory(id);
    mutate(products, false);
  }
  return {
    data, error, mutate, productAdd, productUpdate, getProductByCategory
  }
}

export default useProduct;