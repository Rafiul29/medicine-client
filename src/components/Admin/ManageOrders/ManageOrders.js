import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../../redux/slices/orders/ordersSlice';

const ManageOrders = () => {

  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllOrders()
    );
  }, [dispatch]);

    //get data from store
    const { orders, loading } = useSelector((state) => state?.orders);
console.log(orders)
  return (
    <div>ManageOrders</div>
  )
}

export default ManageOrders