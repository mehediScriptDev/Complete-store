import { Link } from 'react-router-dom';
import login from '../images/login.gif'

const Login = () => {
  return (
    <div className="w-11/12 mx-auto">
      
     <div className=' flex gap-3 lg:flex-row flex-col items-center justify-center'>
         <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In to <span className="text-bidcl">TravelBid</span>
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
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
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

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
     </div>
    </div>
  );
};

export default Login;
