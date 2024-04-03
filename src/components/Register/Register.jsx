import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProveider/AuthProveider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth=getAuth();



const Register = () => {
    const [error,setError]=useState("")
    const {registerUser}=useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        // const phoneNumber=e.target.phoneNumber.value;
        const email=e.target.email.value;
        const password =e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;
        if (password.length<6) {
            setError("password must be 6 char");
            return
        } 
        // const uppercaseRegex = /^[^a-z]*[A-Z]+[^a-z]*$/;  
        if (!/^[^a-z]*[A-Z]+[^a-z]*$/.test(password)) {
          console.log("aajajaj");
            setError("Your password is not strong please provide strong password .");
            return
        }
  
        if (password !==confirmPassword) {
            setError("password don't matched ");
            return
        }
       
       setError("")


        registerUser(email,password)
    }


    const handleGoogle=()=>{
      signInWithPopup(auth,provider)
      .then(result=>console.log(result.user))
      .then(error=>console.error(error))
    }
    return (
        <div className="md:w-1/2 mx-auto my-10 border rounded-lg bg-sky-400 border-sky-200 md:p-10 p-5">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="text-3xl text-center mb-5 text-purple-500 font-bold"
        >
          Please Register Your Profile Here
        </h1>
        <form onSubmit={handleRegister}>
        <div
        className="mb-5"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
         <input
         required
          name="name"
          type="name"
          placeholder="Type here your name"
          className="input border-pink-200 hover:border-purple-700 input-lg w-full "
        />
         </div>
         <div
        className="mb-5"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
         <input
          name="phone"
          type="number"
          placeholder="Type here your phone number"
          className="input border-pink-200 hover:border-purple-700 input-lg w-full "
        />
         </div>
         <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
         <input
         required
          name="email"
          type="email"
          placeholder="Type here your email"
          className="input border-pink-200 hover:border-purple-700 input-lg w-full "
        />
         </div>
         <div
         className="mt-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
         <input
         required
          name="password"
          type="password"
          placeholder="Type here your password"
          className="input border-pink-200 hover:border-purple-700 input-lg w-full "
        />
         </div>
         <div
        className="mt-5"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
         <input
         required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password "
          className="input border-pink-200 hover:border-purple-700 input-lg w-full "
        />
         </div>

         <p className="text-2xl text-white mt-5 ">You are already have an account? <Link to={"/login"}>Login Now</Link></p>
         <button className="btn bg-purple-400 mt-5 px-4 py-3">Register</button>
         {
           error && <p className="text-xl font-bold text-red-500">{error}</p>
         }
        </form>
        <div className="flex md:flex-row flex-col justify-between gap-2">
        <div className="mt-5 flex  items-center">
           <button onClick={handleGoogle} className="text-center btn">Register with Google  </button><FcGoogle className="text-3xl" />
        </div>
        <div className="mt-5 flex  items-center">
           <button className="text-center btn">Register with github  </button><FaGithub  className="text-3xl" />
        </div>
        <div className="mt-5 flex  items-center">
           <button className="text-center btn">Register with facebook  </button><FaFacebook  className="text-3xl text-blue-600" />
        </div>
        </div>
      </div>
    );
};

export default Register;