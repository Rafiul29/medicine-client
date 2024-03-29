import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import { registerUserAction } from "../../../redux/slices/users/usersSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({ fullname, email, password }));
  };

  const { user, error, loading } = useSelector((state) => state?.users);
  
  const navigate=useNavigate()
  useEffect(()=>{
    if(user?.data){
      navigate("/login")
    }
  },[user?.data,navigate])


  return (
    <>
      <section className="relative overflow-x-hidden section-padding h-[calc(100vh-4rem)]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap  justify-centeritems-center">
            <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0 mt-20">
              <div className="py-20 text-center">
                <h3 className="mb-8 text-4xl md:text-3xl font-bold font-heading text-gray-600">
                  Signing up with medicine is super quick
                </h3>
                {/* errr */}
                {/* {error && <ErrorMsg message={error?.message} />} */}
                <form onSubmit={submitHandler}>
                  <input
                    name="fullname"
                    value={fullname}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-4 py-3 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-4 py-3 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-4 py-3 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                    type="password"
                    placeholder="Enter your password"
                  />

                  {loading ? (
                    <button
                      disabled type="submit"
                      className="bg-cyan-600  text-white font-bold font-heading px-4 py-3 rounded-md uppercase"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-heading py-2 px-8 rounded-md duration-500">
                      Register
                    </button>
                  )}

                  <p className="flex gap-2 mt-2">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-500 font-medium hover:underline "
                    >
                      login
                    </Link>
                  </p>
                </form>
                {error &&   <p className=" mt-2 p-1 rounded-md bg-red-100 text-red-500">{error.message}</p>}
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg")',
          }}
        />
      </section>
    </>
  );
};

export default Register;
