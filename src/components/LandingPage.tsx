import logo from "../images/logo.png";
import home from "../images/home.png";
import { Link } from "raviger";

export default function LandingPage() {
  return (
    <div className="p-4">
      <div className="flex flex-row justify-between m-4">
        <img src={logo} alt="logo" width={"5%"} />
        <div className="text-3xl md:text-7xl font-bold">Book's World</div>
        <div className="p-2">
          <Link
            href="/login"
            className="bg-blue-500 shadow shover:bg-blue-700 transition duration-300 text-white font-bold p-3 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6">
          <div className="text-3xl">
            One place to manage all the books you ever read.
          </div>
          <div>
            <img src={home} alt="icon" className="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div>
            <img src={home} alt="icon" className="" />
          </div>
          <div className="text-3xl">
            Get detailed analysis on the book you read.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-24">
        <p className="text-5xl">
          Read better so you actually understand and remember it!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-24">
        <div className="bg-purple-100 rounded-lg text-2xl p-3 shadow-lg">
          <p>A room without books is like a body without a soul.</p>
        </div>
        <p>-Cicero</p>
      </div>
    </div>
  );
}

// use some public api get get books images from name\
