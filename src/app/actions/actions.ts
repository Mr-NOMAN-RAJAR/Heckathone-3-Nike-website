import { json } from "stream/consumers";
import { Product } from "../../../types/productstypes";

export const addToCart = (Product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex(
    (item) => item._id === Product._id
  );
  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({
      ...Product, 
      inventory: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export  const removeFromCart = (productId:string)=>{
 let cart: Product[] = JSON.parse(localStorage.getItem('cart')||'[]')
 cart = cart.filter(item=>item._id !== productId)
 localStorage.setItem('cart',JSON.stringify(cart))
}

export const upDateCartQuantity = (productId: string, quantity: number) => {
    const cart : Product[]= JSON.parse(localStorage.getItem('cart')||'[]')
    const productIndex = cart.findIndex(item=>item._id === productId)

    if (productIndex > -1)  {
       cart[productIndex].inventory = quantity;
       localStorage.setItem('cart', JSON.stringify(cart));
    } 
}

export const getCartItems =() : Product[] =>{
    return JSON.parse(localStorage.getItem('cart')||'[]')
}
