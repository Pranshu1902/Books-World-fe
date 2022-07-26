import Dashboard from "../Common/Dashboard";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { books, mode } from "../Common/Data";
import CircularStatic from "../Common/CircularProgress";
import { Link } from "raviger";
import Header from "../Common/Header";
import { tabs } from "../type/DataTypes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(mode);

  tabs.map((tab) => {
    tab.title === "Home" ? (tab.active = true) : (tab.active = false);
  });

  return (
    <div
      className={`${darkMode ? "bg-gray-700 text-white" : ""} flex flex-col`}
    >
      <div className="w-full bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {/* <div className="w-1/5 fixed">
        <Dashboard currentTab="Home" />
      </div> */}
      <div
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } p-4 min-h-screen gap-4 transition duration-500`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-600"
            } text-4xl font-bold pb-4 transition duration-500`}
          >
            Home
          </p>
          <div>
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#13ae4b", color: "white" }}
              className="cursor-pointer"
              href="/add"
            >
              <i className="fa fa-plus"></i>&nbsp;Add New Book
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-4 justify-between">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            } md:w-1/4 shadow rounded-lg p-6 transition duration-500`}
          >
            <p className="text-gray-500 ">Books Read:</p>
            <p className="text-6xl font-bold">{"10"}</p>
          </div>
          <div>
            <TextField
              label="Search 🔎"
              variant="outlined"
              className={`${
                darkMode ? "text-white" : ""
              } w-full md:w-auto transition duration-500`}
              value={search}
              color={darkMode ? "secondary" : "primary"}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <Link
              href={`/book/${book.id}`}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } flex gap-2 rounded-lg shadow p-2 transition duration-500`}
            >
              <img
                src={book.image}
                alt={book.name + " logo"}
                width={"10%"}
                height={"10%"}
                className="w-1/4"
              />
              <div className="pl-4">
                <p className="text-3xl font-bold">{book.name}</p>
                <p className="pt-6">{book.author}</p>
                <div className="text-3xl">
                  <CircularStatic
                    value={book.percentage}
                    size={100}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
