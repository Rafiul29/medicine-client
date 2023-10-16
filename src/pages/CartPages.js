import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,decreaseCart ,addToCart,getSubtotal,clearCart} from "../redux/slices/Cart/cartSlice.js";
import { currencyFormatter } from "../utils/currencyFormatter.js";

const CartPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems: data ,cartTotalAmount:subtotal} = useSelector((state) => state.cart);

  console.log(data.length)
  const medicineCard = () => {
    navigate("/medicines");
  };

  const handleRemove = (medicine) => {
    dispatch(removeFromCart(medicine));
  };

  const handleDecrease=(medicine)=>{
    dispatch(decreaseCart(medicine))
  }

  const handleIncrease=(medicine)=>{
    dispatch(addToCart(medicine))
  }


  useEffect(() => {
    dispatch(getSubtotal())
  }, [data,dispatch])
  

  
  return (
    <div className="cart-section container mx-auto section-padding">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10 mt-10">
      {data.length>0? `You've added ${data.length} item${data.length>1? "s":""}`:"Cart is Empty" }
      </h2>
      <div className="text-center">
       {data.length===0 && (
        <Link to="/medicines" className="text-cyan-500 cursor-pointer">Start Shopping now</Link>
       )}
      </div>
      {data.length>0 && (
      <>
      <div className="cart-container">
        <div className="medicine-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-medicine col-span-2">medicine</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">TOtal price</div>
        </div>

        {data?.map((medicine) => (
          <div key={medicine._id} className="medicine grid grid-cols-5 gap-10 mt-10 border-b pb-5">
            <div className="left flex col-span-2">
              <img
                src={medicine.images}
                alt={medicine.name}
                className="h-32 w-32 object-cover"
              />
              <div className="details flex flex-col gap-3 items-start">
                <span>{medicine.name}</span>
                <button
                  onClick={() => handleRemove(medicine)}
                  className="uppercase hover:text-rose-300 duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="unit-price">{currencyFormatter(medicine.price)}</div>
            <div className="counter flex">
              <button 
              onClick={()=>handleDecrease(medicine)}
              className="h-10 w-10 border border-gray-300 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                -
              </button>
              <button className="h-10 w-10 border border-gray-300  bg-gray-200 active:bg-gray-700 active:text-gray-50">
               {medicine.cartQuantity}
              </button>
              <button 
              onClick={()=>handleIncrease(medicine)}
              className="h-10 w-10 border border-gray-300 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                +
              </button>
            </div>
            <div className="total-price ml-auto">
              {" "}
              {currencyFormatter(medicine.price * medicine.cartQuantity)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button
          onClick={() => dispatch(clearCart())}
          className="clear-btn uppercase bg-gray-100 py-3 px-5 border border-gray-200 font-medium hover:text-rose-600 hover:border-rose-200 duration-300 hover:bg-rose-200"
        >
          Clear Cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full  text-2xl font-medium ">
            <span>Subtotal</span>
            <span>{currencyFormatter(subtotal)}</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="checkout bg-cyan-500 w-full py-3 uppercase font-medium text-cyan-50 tracking-widest hover:bg-cyan-600 duration-300">
            Checkout
          </button>{" "}
          <button
            className="continune uppercase text-cyan-500 font-medium flex gap-1 mt-2"
            onClick={medicineCard}
          >
            <BsArrowLeft className="mt-1" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
      </>)
      }
      
    </div>
  );
};

export default CartPages;