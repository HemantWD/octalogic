import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

const Login: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-stone-400 to-gray-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h4 className="text-3xl text-center font-semibold mb-6">Login Page</h4>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <Button variant="secondary">Login</Button>
          <Button variant="secondary">Register</Button>
        </div>
        <p className=" text-center text-gray-400 mt-6">
          Not Register ?
          <Link to="/register" className=" text-blue-600">
            &nbsp; Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
