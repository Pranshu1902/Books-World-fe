import logo from "../images/logo.png";
import dashboard from "../images/dashboard.png";
import home from "../images/home.png";
import book from "../images/book.png";
import { Link } from "raviger";
import { Button } from "@material-ui/core";

export default function LandingPage() {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-row justify-between p-2 bg-green-800 text-white">
        <img src={logo} alt="logo" width={"5%"} />
        <div className="text-3xl md:text-7xl font-bold">Book's World</div>
        <div className="p-2 flex items-center">
          <Link
            href="/login"
            className="bg-green-700 hover:bg-green-600 shadow shover:bg-green-700 transition duration-300 text-white font-bold p-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="p-4 pb-12">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <Button
              variant="contained"
              style={{ backgroundColor: "#009dff", color: "white" }}
              className="cursor-pointer"
              href="/home"
            >
              Home
            </Button>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <div className="text-3xl">
              One place to manage all the books you ever read.
            </div>
            <div>
              <img src={home} alt="icon" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="md:w-1/2">
              <img src={dashboard} className="rounded-lg shadow" alt="icon" />
            </div>
            <div className="text-3xl md:w-1/2">
              Get detailed analysis on the book you read.
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <div className="text-3xl md:w-1/2">
              Add detailed comments and track your progress.
            </div>
            <div className="md:w-1/2">
              <img src={book} alt="icon" className="rounded-lg shadow" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-24">
          <p className="text-5xl">Read better so you actually understand!</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-24">
          <div className="bg-green-100 rounded-lg text-2xl p-3 shadow-lg">
            <p>A room without books is like a body without a soul.</p>
            <p className="text-sm flex justify-end">-Cicero</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// use some public api get get books images from name\
