import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-0 border p-3 rounded-md">
      <div className="space-y-2 md:col-span-3">
        <div className="space-x-1 text-md">
          <span className="uppercase font-semibold">order id:</span>{" "}
          <span className="text-cyan-400">{order._id}</span>
        </div>
        <div className="space-y-1">
          <h1 className="uppercase font-semibold text-sm">shipping details:</h1>
          <div className="text-sm">
            <h2 className="space-x-2">
              <span className="font-medium">Name:</span>
              <span>{order?.name}</span>
            </h2>
            <h2 className="space-x-2">
              <span className="font-medium">Email:</span>
              <span>{order?.email}</span>
            </h2>
            <h2 className="space-x-2">
              <span className="font-medium">City:</span>
              <span>{order?.city}</span>
            </h2>
            <h2 className="space-x-2">
              <span className="font-medium">Address:</span>
              <span>{order?.address}</span>
            </h2>
            <h2 className="space-x-2">
              <span className="font-medium">Phone Name:</span>
              <span>{order?.phoneNumber}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <h1 className="uppercase font-semibold text-sm">Medicine details:</h1>
        <div>
          <ul>
            {order?.medicines.map((medicine, i) => (
              <li key={medicine._id} className="space-x-1">
                <span className="font-semibold text-cyan-800">{i + 1}.</span>
                <span className="text-sm">{medicine.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-2 space-y-2 text-sm">
        <h2 className="space-x-1">
          <span className="capitalize font-semibold">total amount:</span>
          <span className="text-cyan-500 text-md ">
            {currencyFormatter(order?.total_amount)}
          </span>
        </h2>
        <h2 className="space-x-1">
          <span className="capitalize font-semibold">payment status:</span>
          <span className="text-cyan-500 bg-cyan-100 px-2  py-1 rounded-md  text-md ">
            {order.payment_status}
          </span>
        </h2>
        <h2 className="space-x-1">
          <span className="capitalize font-semibold">delivery status:</span>
          <span className="text-cyan-500 bg-cyan-100 px-2  py-1 rounded-md  text-md ">
            {order.delivery_status}
          </span>
        </h2>
        <h2 className="space-x-1">
          <span className="capitalize font-semibold">order date:</span>
          <span className="text-cyan-500 px-2  py-1 rounded-md  text-md ">
            {new Date(order?.createdAt).toLocaleDateString()}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default OrderCard;
