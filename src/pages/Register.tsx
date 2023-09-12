import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { FormEvent, useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-stone-400 to-gray-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h4 className="text-3xl text-center font-semibold mb-6">
          Register Page
        </h4>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            id="email"
            className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            id="password"
            className="mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <Button variant="secondary">Register</Button>
        </div>
        <p className=" text-center text-gray-400 mt-6">
          Already Register ?
          <Link to="/" className=" text-blue-600">
            &nbsp; Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
