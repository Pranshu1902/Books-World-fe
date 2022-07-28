import { Link, navigate } from "raviger";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { signup } from "../../api/ApiUtils";
import Notification from "../../Common/Notification";
import logo from "../../images/logo.png";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNofitication] = useState({
    open: false,
    message: "",
    type: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        signup(username, password).then(() => {
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          setNofitication({
            open: true,
            message: "Successfully signed up!",
            type: "success",
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 h-full flex flex-col gap-4 justify-center items-center  bg-[#13ae4b] text-white">
        <div className="flex gap-4 w-full justify-center items-center">
          <img src={logo} alt="" width={"10%"} />
          <div className="text-5xl font-bold">Book's World</div>
        </div>
        <div className="text-2xl">
          <p>One place to manage all the books you ever read.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 justify-center items-center h-full">
        {notification.open && (
          <div className="right-6 top-6 absolute">
            <Notification
              message={notification.message}
              type={notification.type}
              closeCB={() => setNofitication({ ...notification, open: false })}
            />
          </div>
        )}
        <div>
          <p className="text-4xl mb-12">Sign up</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
            <p>Confirm Password:</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-100 rounded-lg p-2 shadow"
            />
          </div>
          {error.length > 0 && (
            <div className="flex justify-center items-center text-sm text-red-500">
              {error}
            </div>
          )}
          {loading ? (
            <div className="flex justify-center items-center">
              <TailSpin
                color="#13ae4b"
                height={50}
                width={50}
                ariaLabel="loading-indicator"
              />
            </div>
          ) : (
            <button
              disabled={
                username.length === 0 ||
                password.length === 0 ||
                confirmPassword.length === 0
              }
              type="submit"
              className="mt-12 bg-[#13ae4b] rounded-lg p-3 hover:bg-green-800 cursor-pointer transition duration-200 w-full font-bold text-white"
            >
              Sign up
            </button>
          )}
        </form>
        <div className="flex flex-col gap-2">
          <p>
            ALready have an account?{" "}
            <Link
              className="text-blue-500 hover:text-blue-700 font-bold"
              href="/login"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
