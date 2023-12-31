import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchSingleMedicineAction } from "../../../redux/slices/medicines/medicineSlices";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Rating from "../Rating/Rating";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { addToCart } from "../../../redux/slices/Cart/cartSlice";

const MedicineItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get single medicine id
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleMedicineAction({ id }));
  }, [dispatch, id]);

  const { medicine, loading, error } = useSelector((state) => state?.medicines);

  //get data from store
  const { userInfo } = useSelector((state) => state?.users?.userAuth);

  const addToCartHander = (medicine) => {
    if (userInfo?.userFound.email) {
      dispatch(addToCart(medicine));
      navigate("/cart");
      return;
    } else {
      navigate("/cart");
      return;
    }
    // if(!userInfo?.userFound?.email){
    //   return <Navigate to='/login' state={{from:location}} replace/>
    // }
  };

  return (
    <>
      {loading && <h2>Loading ......</h2>}
      {error && <ErrorMsg message={error} />}
      <section className=" wrapper py-20 mt-20 h-[calc(100vh)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="img h-100 overflow-hidden">
            <img
              src={medicine?.medicine?.images}
              alt={medicine?.medicine?.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" flex flex-col gap-5 p-5">
            <h2 className="text-4xl font-semibold tracking-widest">
              {medicine?.medicine?.name}
            </h2>
            <p className="text-lg tracking-wider leading-7 ">
              {medicine?.medicine?.description}
            </p>
            <h3 className="flex flex-row gap-5 text-lg ">
              {" "}
              <span>Price:</span>{" "}
              <span className="font-semibold">
                {currencyFormatter(medicine?.medicine?.price)}
              </span>
            </h3>
            <h3 className="flex flex-row gap-5 text-lg ">
              {" "}
              <span>Status:</span>{" "}
              <span className="font-semibold">
                <div>
                  {medicine?.medicine?.countInStock > 0 ? (
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
                  ) : (
                    <div className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Out of Stock
                    </div>
                  )}
                </div>
              </span>
            </h3>
            <Rating
              value={medicine?.medicine?.averageRating}
              text={`${medicine?.medicine?.totalReviews}`}
            />

            <div className="mt-5 font-bold">
              <button
                onClick={() => addToCartHander(medicine?.medicine)}
                className=" bg-cyan-600/90 text-cyan-50 text-md px-5 py-3 rounded-xl font text-xl  hover:bg-cyan-500/75 hover:shadow-md hover:shadow-cyan-500/40 duration-700"
              >
                {" "}
                Add to cart
              </button>
            </div>
            <Link
              to="/medicines"
              className="flex flex-row gap-2 items-center text-xl mt-5"
            >
              <AiOutlineArrowLeft className="text-cyan-600 font-semibold" />{" "}
              <span>Go Back</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicineItem;
