import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../redux/slices/users/usersSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const [formData, setFormData] = useState({
    email:"",
    password: "",
  });

  //---Destructuring---
  const { email, password } = formData;

  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAction({ email, password }));
  };

  //get data from store
  const { error, loading, userInfo } = useSelector(
    (state) => state?.users?.userAuth
  );
  
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (userInfo?.userFound) {
      navigate(from,{replace:true});
      window.location.reload();
    }
  },[userInfo,from,navigate]);

  return (
    <>
      <section className="py-20 bg-gray-600 overflow-x-hidden section-padding mt-20 h-[calc(100vh-9rem)]">
        <div className="relative container px-4 mx-auto">
          <div className="absolute inset-0 bg-cyan-200 my-24 -ml-4" />
          <div className="relative flex flex-wrap bg-white">
            <div className="w-full md:w-4/6 px-4">
              <div className="lg:max-w-3xl mx-auto py-20 px-4 md:px-10 lg:px-20">
                <h3 className="mb-8 text-4xl md:text-3xl font-bold font-heading text-gray-600">
                  Login to your account
                </h3>
                <p className="mb-5 font-md font-heading">
                  Happy to see you again
                </p>
            
                <form
                  className="flex flex-col gap-5"
                  onSubmit={onSubmitHandler}
                >
                  <div className="w-full px-4">
                    <label className="flex flex-col gap-2">
                      <h4 className=" text-gray-400  font-bold font-heading">
                        Your Email
                      </h4>
                      <input
                        name="email"
                        value={email}
                        onChange={onChangeHandler}
                        className="px-3 py-2  w-full border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                        type="email"
                      />
                    </label>
                  </div>
                  <div className="w-full px-4 ">
                    <label className="flex flex-col gap-2">
                      <h4 className=" text-gray-400  font-bold font-heading">
                        Password
                      </h4>
                      <input
                        name="password"
                        value={password}
                        onChange={onChangeHandler}
                        className="px-3 py-2 w-full border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                        type="password"
                      />
                    </label>
                  </div>

                  <div className="w-full px-4">
                    {loading ? (
                      <button
                        type="submit"
                        disabled
                        className="w-full bg-cyan-600  text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-heading py-2 px-8 rounded-md duration-500"
                      >
                        Login
                      </button>
                    )}

                    <p className="flex gap-2 mt-2">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-blue-500 font-medium hover:underline"
                      >
                        register
                      </Link>
                    </p>
                  </div>
                </form>
              {error &&   <p className=" ml-3 mt-2 p-1 rounded-md bg-red-100 text-red-500">{error.message}</p>}
              </div>
             
            </div>
            <div
              className="w-full md:w-2/6 h-128 md:h-auto flex items-center lg:items-end px-4 pb-20 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg")',
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
