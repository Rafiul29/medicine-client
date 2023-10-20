import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../../redux/slices/categories/categoriesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CategoryToAdd() {
  //dispatch
  const dispatch = useDispatch();
  // naviagte
  const navigate=useNavigate()

  const [name, setName] = useState("");

  const { loading } = useSelector((state) => state?.categories);

  //onSubmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!name){
      toast.error('🦄 Must be filed all filled', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return
    }
    //dispatch
    dispatch(createCategoryAction({ name }));
       // toast messsage
       toast.info("Added Category successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // navigate to 
      navigate("/admin/manage-category");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 section-padding mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <svg
            className="mx-auto h-10 text-blue-600 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add Medicine Category
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyna-500 focus:outline-none focus:ring-cyna-500 sm:text-sm"
                  />
                </div>
              </div>

              <button
                disable={loading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyna-500"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
