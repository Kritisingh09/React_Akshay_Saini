import { useSelector } from "react-redux";
import { CDN_menu, MENU_API } from "../utils/constants";
import ItemList from "./Itemlist";
import { addItem, removeItems, clearCart } from '../utils/cartSlice';
import {useDispatch} from 'react-redux';
const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const dispatch=useDispatch();
const clearCartHandler=()=>{
  console.log("clear cart");
  dispatch(clearCart());
}
  return (
    <>
      <h1>Cart</h1>
      {cartItems.length === 0 && (<h1>Cart is empty</h1>) }
      <div className="item-list">
        <button className="clearCart" onClick={clearCartHandler}>Clear Cart</button>
        {cartItems.map((item, index) => {
          console.log("item", item?.card?.info);
          return <ItemList itemList={item} key={index} />;
        })}
      </div>
      
    </>
  );
};
export default CartPage;
