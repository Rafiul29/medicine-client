import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import SuccessMsg from "../../SuccessMsg/SuccessMsg";
import { createMedicineAction } from "../../../redux/slices/medicines/medicineSlices";

export default function AddMedicine() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  //get product from store
  const { medicines, isAdded, loading, error } = useSelector(
    (state) => state?.medicines
  
  );
  console.log(medicines)
  function resetFrom(){
    setName("");
    setCategory("");
    setImages("");
    setPrice("");
    setCountInStock("");
    setDescription("")
  };
  //onSubmit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //reset form data
    const obj = {
      name,
      description,
      images,
      category,
      price,
      countInStock,
    };

    dispatch(createMedicineAction(obj));

    // reset input form
    resetFrom();
  };

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {isAdded && <SuccessMsg message="Medicine Added Successfully" />}

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8  section-padding mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create New Medicine
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-cyan-600 hover:text-cyan-500">
              Manage Medicine
            </p>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              {/* name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medicine Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Select category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="mt-1">
                  <input
                    name="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              {/*  images */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <div className="mt-1">
                  <input
                    name="images"
                    type="text"
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="mt-1">
                  <input
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Quantity
                </label>
                <div className="mt-1">
                  <input
                    name="countInStock"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                    type="number"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* description */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Medicine Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-md border-gray-300 border shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Add Medicine
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
