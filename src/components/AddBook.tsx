import Dashboard from "../Common/Dashboard";
import { Button, NativeSelect, TextField } from "@material-ui/core";
import { useState } from "react";
import { books, mode } from "../Common/Data";
import CircularStatic from "../Common/CircularProgress";
import { Link } from "raviger";
import Header from "../Common/Header";
import { tabs } from "../type/DataTypes";

export default function AddBook() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(mode);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Reading");
  const [pages, setPages] = useState(0);

  tabs.map((tab) => {
    tab.title === "Books" ? (tab.active = true) : (tab.active = false);
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
        } p-4 min-h-screen gap-4`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-600"
            } text-4xl font-bold pb-4`}
          >
            Add New Book
          </p>
        </div>
        <div className="flex justify-center">
          <form
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } rounded-lg p-4 flex flex-col gap-8 md:w-3/5`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-500"
                  } text-xl font-bold`}
                >
                  Name:
                </p>
                <TextField
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="w-full">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-500"
                  } text-xl font-bold`}
                >
                  Author:
                </p>
                <TextField
                  variant="outlined"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  fullWidth
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-500"
                  } text-xl font-bold`}
                >
                  Total Pages:
                </p>
                <TextField
                  type="number"
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="w-full flex flex-col justify-center">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-500"
                  } text-xl font-bold`}
                >
                  Status:
                </p>
                <NativeSelect
                  variant="outlined"
                  onChange={(e) => setStatus(e.target.value)}
                  defaultValue={status}
                  fullWidth
                >
                  <option value="Completed">Completed</option>
                  <option value="Reading">Reading</option>
                  <option value="Aborted">Aborted</option>
                </NativeSelect>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-500"
                } text-xl font-bold`}
              >
                Image:
              </p>
              <input type="file" />
            </div>
            <div className="pt-16 flex flex-col md:flex-row gap-4 justify-between">
              <Button
                variant="contained"
                style={{ backgroundColor: "#13ae4b", color: "white" }}
              >
                Create Book
              </Button>
              <Button variant="contained">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
