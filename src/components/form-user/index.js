"use-client";

import axiosInstance from "@/app/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormUser({ user, loading }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: loading ? "" : user?.firstName,
    lastName: loading ? "" : user?.lastName,
    email: loading ? "" : user?.email,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put("/users", formData);
      console.log("User updated Successful: ", response.data);
    } catch (error) {
      console.error("Error updating user: ", error);
    } finally {
      router.push("/home");
    }
  };
  console.log(formData);

  return (
    <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur z-50">
      <div className="grid justify-items-center p-6 bg-white rounded-xl shadow-md text-gray-700">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <div className="flex flex-col items-center mb-6">
            <p className="">
              Welcome to{" "}
              <span className="font-bold text-blue-700">Interners</span>!
            </p>
            <p>The first step is to create your account.</p>
          </div>
        </div>
        <form className="grow" onSubmit={handleSubmit}>
          <div className="mb-6 flex space-x-3">
            <div className="grow">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                id="firstName"
                placeholder="John"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="grow">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="Doe"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              defaultValue={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>

          <div className="grid justify-items-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
