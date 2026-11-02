"use client";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}