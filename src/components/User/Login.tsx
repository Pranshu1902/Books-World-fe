import { Link, navigate } from "raviger";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { login } from "../../api/ApiUtils";
import logo from "../../images/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    try {
      setLoading(true);
      const data = await login(username, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate(`/home`);
      } else {
        setError("Invalid login credentials");
        setLoading(false);
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 h-full flex flex-col gap-4 justify-center items-center  bg-[#109908] text-white">
        <div className="flex gap-4 w-full justify-center items-center">
          <img src={logo} alt="" width={"10%"} />
          <div className="text-5xl font-bold">Book's World</div>
        </div>
        <div className="text-2xl">
          <p>One place to manage all the books you ever read.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 justify-center items-center h-full">
        <div>
          <p className="text-4xl mb-12">Login</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-6">
            <p className="font-bold">Username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow"
            />
            <p className="font-bold">Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow"
            />
          </div>
          {error.length > 0 && (
            <div className="flex justify-center items-center p-2">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
          {loading ? (
            <div className="flex justify-center items-center">
              <TailSpin
                color="#00BFFF"
                height={50}
                width={50}
                ariaLabel="loading-indicator"
              />
            </div>
          ) : (
            <button
              disabled={password.length === 0 || username.length === 0}
              type="submit"
              className="mt-8 bg-[#12c408] rounded-lg p-3 hover:bg-green-700 transition duration-200 w-full font-bold text-white"
            >
              Login
            </button>
          )}
        </form>
        <div>
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
