import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProveider/AuthProveider";
// ..
AOS.init();

const Login = () => {
const {loginUser}=useContext(AuthContext);


const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password =e.target.password.value;
    loginUser(email,password)
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
        Please Login Your Profile Here
      </h1>
      <form onSubmit={handleLogin}>
       <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
       <input
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
        name="password"
        type="password"
        placeholder="Type here your password"
        className="input border-pink-200 hover:border-purple-700 input-lg w-full "
      />
       </div>
       <p className="text-2xl text-white mt-5 ">Forget Password ?</p>
       <p className="text-2xl text-white mt-5 ">You are new  here? <Link to={"/regester"}>Register Now</Link></p>
       <button className="btn bg-purple-400 mt-5 px-4 py-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
