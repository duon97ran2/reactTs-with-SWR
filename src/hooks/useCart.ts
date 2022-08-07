import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useSWRConfig } from 'swr';
import { useState } from 'react';
const useCart = () => {
  const { cache } = useSWRConfig();
  const Cart = cache.get("cart") ?? [];
  const navigate = useNavigate();

  const addCart = (cartItem: any) => {
    const exist = Cart.find((item: any) => item._id == cartItem._id);
    if (exist) {
      exist.amount += cartItem.amount;
    }
    else {
      Cart.push(cartItem);
    }
    cache.set("cart", Cart);
    message.success("Thêm sản phẩm thành công")
  }
  const decrease = (cartItem: any) => {
    const exist = Cart.find((item: any) => item._id == cartItem._id);
    exist.amount--;
    if (!exist.amount) {
      return removeCart(exist);
    }
    cache.set("cart", Cart);
    navigate("/cart")
  }
  const increase = (cartItem: any) => {
    const exist = Cart.find((item: any) => item._id == cartItem._id);
    exist.amount++;
    cache.set("cart", Cart);
    navigate("/cart")
  }
  const removeCart = (cartItem: any) => {
    const newCart = Cart.filter((item: any) => item._id != cartItem._id);
    cache.set("cart", newCart);
    message.success("Xoá sản phẩm thành công");
    navigate("/cart")
  }
  return { cache, addCart, removeCart, decrease, increase }
}

export default useCart