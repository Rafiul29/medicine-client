import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-2rem)]">
      <div className="flex justify-center items-center md:mt-24 mt-12 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h2 className="text-4xl">Payment successfully done</h2>
          <Link to="/user/orders" className="text-md font-light tracking-wider bg-blue-600 text-gray-100 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-gray-100 hover:shadow-lg duration-500">check your product</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;