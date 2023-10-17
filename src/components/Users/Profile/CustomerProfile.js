import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../../redux/slices/users/usersSlice";
import {AiFillCalendar} from "react-icons/ai"
import ErrorMsg from "../../ErrorMsg/ErrorMsg";

export default function CustomerProfile() {
  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  
  //get data from store
  const { error, loading, profile } = useSelector((state) => state?.users);



  return (
   <>
      {error && (<ErrorMsg message={error} />)}
      {loading && (<h2>loading .....</h2>)}
    <section className="section-padding mt-20 ">
    <div className="wrapper flex justify-center items-center ">
    <div className="space-y-10">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Hi, {profile?.user?.fullname} you are welcome
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400">
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            {profile?.user?.email}
          </div>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <AiFillCalendar
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Date Joined: {new Date(profile?.user?.createdAt).toDateString()}
          </div>
        </div>
      </div>
    </div>
    </div> 
    </section>
   </>
  );
}