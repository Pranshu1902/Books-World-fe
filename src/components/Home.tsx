import Dashboard from "../Common/Dashboard";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { books } from "../Common/Data";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Home" />
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen gap-2">
        <p className="text-4xl font-bold text-gray-600 pb-4">Home</p>
        <div className="flex justify-between">
          <div className="bg-white w-1/4 shadow rounded-lg p-6">
            <p className="text-gray-500 ">Books Read:</p>
            <p className="text-6xl font-bold">{"10"}</p>
          </div>
          <div>
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-12 grid grid-cols-2 gap-6">
          {books.map((book) => (
            <div className="flex gap-2 bg-white rounded-lg shadow p-2">
              <img
                src={book.image}
                alt=""
                width={"10%"}
                height={"10%"}
                className="w-1/4"
              />
              <div className="">
                <p className="text-3xl font-bold">{book.name}</p>
                <p className="pt-6">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
