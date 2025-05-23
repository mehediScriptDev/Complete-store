import { Link } from "react-router-dom";
import login from "../images/login.gif";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { forgotPass } = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
  };
  const passwordForgot = (e) => {
    e.preventDefault();
    const email =e.target.email.value;
    if (!email) {
    return Swal.fire({
      title: "Please enter an email.",
      icon: "warning",
    });
  }
    forgotPass(email)
      .then(() => {
        Swal.fire({
          title: "Rest email sent!",
          icon: "success",
          draggable: true,
        });
         document.getElementById('my_modal_3').close();
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage)
         Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
      });
       document.getElementById('my_modal_3').close();
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className=" flex gap-3 lg:flex-row flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign In to <span className="text-bidcl">TravelBid</span>
          </h2>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                name="pass"
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" required className="mr-2" />
                Remember me
              </label>
              <Link
                onClick={()=> document.getElementById('my_modal_3').showModal()}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            

            <button
              type="submit"
              className="w-full bg-travelcl text-white py-2 rounded-lg hover:bg-bidcl duration-300 transition-all"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <div>
          <img src={login} alt="" />
        </div>
        <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Write email to get reset email.</h3>
                <form onSubmit={passwordForgot} className="flex gap-2">
                  <input className="py-2 px-4 rounded-md border-2 border-travelcl w-full" type="email" placeholder="Type email here" name="email" id="" />
                <input className="btn rounded-md text-white bg-travelcl" type="submit" value="Enter" />
                </form>
              </div>
            </dialog>
      </div>
    </div>
  );
};

export default Login;
