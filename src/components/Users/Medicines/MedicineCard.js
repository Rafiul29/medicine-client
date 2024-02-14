import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../../utils/currencyFormatter";

const MedicineCard = ({ medicine }) => {
  const { name, description, images, price, _id } = medicine;

  return (
    <div className=" product flex flex-col gap-2 rounded-md overflow-hidden border shadow-md hover:shadow-xl duration-300 ">
      <div className="img w-full h-64 overflow-hidden">
        <img
          src={images}
          alt={name}
          className="w-full h-full object-cover hover:md:scale-105 duration-500"
        />
      </div>

      <div className="product_detail p-3 flex flex-col gap-2  bg-gray-50">
        <h3 className="text-xl font-semibold truncate">{name}</h3>

        <p className="text-justify  truncate">{description}</p>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">{currencyFormatter(price)}</p>

          <Link
            to={`/medicines/${_id}`}
            className="bg-cyan-600/90 text-cyan-50 text-md px-5 py-2 rounded-md hover:bg-cyan-500/75
            shadow-lg hover:shadow-md hover:shadow-cyan-500/40 duration-700"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
