import { Link } from "raviger";
import { useState } from "react";
import logo from "../../images/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 flex gap-4 justify-center items-center h-full bg-[#12c408] text-white">
        <img src={logo} alt="" width={"10%"} />
        <div className="text-5xl font-bold">Book's World</div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-12 justify-center items-center h-full">
        <div>
          <p className="text-4xl">Login</p>
        </div>
        <div className="flex flex-col gap-6">
          <p>Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 rounded-lg p-2 shadow"
          />
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 rounded-lg p-2 shadow"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-[#12c408] rounded-lg p-3 hover:bg-green-700 transition duration-200 w-full font-bold text-white">
            Login
          </button>
          <p>
            New User?{" "}
            <Link
              className="text-blue-500 hover:text-blue-700 font-bold"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
