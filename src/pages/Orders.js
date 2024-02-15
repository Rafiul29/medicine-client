import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrdersAction } from "../redux/slices/orders/ordersSlice";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserOrdersAction());
  }, [dispatch]);

  //get data from store
  const { orders, loading } = useSelector((state) => state?.orders);
  console.log(orders);

  return <div>Orders</div>;
};

export default Orders;
