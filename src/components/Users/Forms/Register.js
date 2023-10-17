import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import ErrorMsg from '../../ErrorMsg/ErrorMsg'
import { registerUserAction } from '../../../redux/slices/users/usersSlice';


const Register = () => {

  const dispatch=useDispatch();
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  
  const { fullname, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({fullname,email,password}))
  };

  const { user, error, loading } = useSelector((state) => state?.users);


//redirect
  if (user?.email) {
    window.location.href = "/login";
  }


  return (
    <>
    <section className="relative overflow-x-hidden section-padding">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
            <div className="py-20 text-center">
              <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">
                Signing up with social is super quick
              </h3>
              {/* errr */}
              {error && <ErrorMsg message={error?.message} />}
              <p className="mb-10">Please, do not hesitate</p>
              <form onSubmit={onSubmitHandler}>
                <input
                  name="fullname"
                  value={fullname}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-cyan-300 focus:border-cyan-300 rounded-md"
                  type="password"
                  placeholder="Enter your password"
                />
              
              {loading ? (
                      <button
                        disabled
                        className="bg-gray-800  text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                        Register
                      </button>
                    )}
             
              </form>
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
  )
}

export default Register