import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMedicineAction,
  updateMedicineAction,
} from "../../../redux/slices/medicines/medicineSlices";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchCategoriesAction } from "../../../redux/slices/categories/categoriesSlice";

export default function UpdateMedicine() {
  const dispatch = useDispatch();

  const { medicine, loading } = useSelector(
    (state) => state?.medicines
  );
  

  const [name, setName] = useState(medicine?.medicine?.name);
  const [description, setDescription] = useState(
    medicine?.medicine?.description
  );
  const [category, setCategory] = useState(medicine?.medicine?.category);
  const [images, setImages] = useState(medicine?.medicine?.images);
  const [price, setPrice] = useState(medicine?.medicine?.price);
  const [countInStock, setCountInStock] = useState(
    medicine?.medicine?.countInStock
  );

  // navigate
  const navigate = useNavigate();
  //get id from params
  const { id } = useParams();

  //fetch single product
  useEffect(() => {
    dispatch(fetchSingleMedicineAction({ id }));
  }, [id, dispatch]);

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

    dispatch(updateMedicineAction({ obj, id }));

    toast.info("Update medicine successfully", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/admin/manage-medicines");
  };
  //categories
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);
  const { categories } = useSelector((state) => state?.categories?.categories);
  console.log("ca",categories)

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8  section-padding mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Update Medicine
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-cyan-600 hover:text-cyan-500">
              Manage Medicine
            </p>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* {error && <ErrorMsg message={error?.message} />}
      {isAdded && <SuccessMsg message="Medicine Update Successfully" />} */}

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
                  Select Category
                </label>
                <select
                  name="category"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  className="mt-1  block w-full rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                  defaultValue="Canada"
                >
                  <option>-- Select Category --</option>
                  {categories?.map((category) => (
                    <option key={category?._id} value={category?.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
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
                <button disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Update Medicine
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
