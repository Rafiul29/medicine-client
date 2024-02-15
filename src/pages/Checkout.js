import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../utils/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { createOrderAction } from "../redux/slices/orders/ordersSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );

  // dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCheckOut = (e) => {
    e.preventDefault();

    const obj = {
      name,
      email,
      address,
      city,
      phoneNumber,
      total_amount: subtotal,
      medicines: data,
    };
    // if(!name || !description ||!images||!category||!price ||!countInStock ){
    //   toast.error('🦄 Must be filed all filled', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    //     return
    // }
    dispatch(createOrderAction(obj));
  };

  const { order, loading } = useSelector((state) => state?.orders.order);
  console.log(order)
  useEffect(() => {
    if(order?._id){
       // toast messsage
    toast.info("Order successfully done ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotalAmount")
    navigate("/");
    }
  }, [order?._id,navigate]);
  return (
    <div className="section-padding mt-20 min-h-[calc(100vh-9rem)]">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium ">Shipping Details:</h2>
            <form
              onSubmit={handleCheckOut}
              className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
            >
              <div>
                <label className="flex flex-col gap-2">
                  <h4 className=" text-gray-400  font-heading">Your Name</h4>
                  <input
                    name="name"
                    value={name}
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-2">
                  <h4 className=" text-gray-400  font-heading">Email</h4>
                  <input
                    name="email"
                    value={email}
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-2">
                  <h4 className=" text-gray-400   font-heading">
                    Phone Number
                  </h4>
                  <input
                    name="city"
                    value={phoneNumber}
                    type="text"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-2">
                  <h4 className=" text-gray-400   font-heading">City</h4>
                  <input
                    name="city"
                    value={city}
                    type="text"
                    required
                    onChange={(e) => setCity(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <label className="flex flex-col gap-2">
                  <h4 className=" text-gray-400   font-heading">Address</h4>
                  <textarea
                    cols={4}
                    rows={3}
                    name="address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                {" "}
                <button
                  disabled={loading}
                  type="submit"
                  className="block w-full text-md appearance-none rounded-md border bg-cyan-500 px-3 py-2  shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                >
                  Proceed to checkout
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-medium md:mb-10">Order Summary</h2>
            <div className="space-x-2 font-semibold ">
              <span className="text-xl text-gray-600">Total amount : </span>
              <span className="text-cyan-600 px-5 py-2 rounded-md text-xl ">
                {currencyFormatter(subtotal)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
