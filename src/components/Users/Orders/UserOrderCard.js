import { Fragment } from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

const UserOrderCard = ({ order }) => {
  console.log(order);
  return (
    <div className="border p-2 text-md">
      <div className=" grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        <div className="md:col-span-2 space-y-1">
          <h2 className="font-semibold text-xl">Medicine Name: </h2>
        {order?.medicines?.map((medicine) => (
          <Fragment key={medicine._id}>
            <h2>{medicine?.name}</h2>
          </Fragment>
        ))}
        </div>
        <div className="space-y-2 md:col-span-1">
          <h2 className="space-x-1 font-semibold">
            <span className="capitalize ">total amount:</span>
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
    </div>
  );
};

export default UserOrderCard;
