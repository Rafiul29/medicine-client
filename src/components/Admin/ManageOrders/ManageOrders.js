import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from "../../../redux/slices/orders/ordersSlice";
import OrderCard from "./OrderCard";


const ManageOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  //get data from store
  const { orders, loading } = useSelector((state) => state?.orders);
  

  let content = null;

  if (loading) {
    content = (
      <h2 className="w-full text-md p-2  text-center text-red-50 bg-rose-300">
        Loading .......
      </h2>
    );
  }
  if (!loading && orders?.allOrders?.length === 0) {
    content = (
      <h2 className=" w-full text-2xl  text-center text-red-50 bg-rose-400">
        orders not found
      </h2>
    );
  }

  if (!loading && orders?.allOrders?.length > 0) {
    content = orders?.allOrders?.map((order) => (
      <OrderCard key={order?._id} order={order} />
    ));
  }

  return (
    <section className="section-padding min-h-screen mt-20">
      <div className="wrapper space-y-10">
        <h2 className="text-center text-xl font-semibold">All Orders - <span className="text-cyan-500">[{orders?.allOrders?.length}]</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
