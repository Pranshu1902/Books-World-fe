import { Switch } from "@material-ui/core";
import { Link } from "raviger";
import { useEffect, useState } from "react";
import CircularStatic from "../Common/CircularProgress";
import { books, mode } from "../Common/Data";
import Header from "../Common/Header";
import { tabs } from "../type/DataTypes";

export default function Books() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [completed, setCompleted] = useState(true);
  const [darkMode, setDarkMode] = useState(mode);

  tabs.map((tab) => {
    tab.title === "Books" ? (tab.active = true) : (tab.active = false);
  });

  useEffect(() => {
    document.title = "Books | Book's World";
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        } p-4 min-h-screen transition duration-500`}
      >
        <div className="flex flex-col">
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-500"
            } text-4xl font-bold pb-4 transition duration-500`}
          >
            Books
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow rounded-lg p-6 md:w-1/4 transition duration-500`}
            >
              <p className="text-gray-500">Total books:</p>
              <p className="text-6xl font-bold">
                {
                  books.filter((book) =>
                    completed ? book.completed : !book.completed
                  ).length
                }
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <p>Completed</p>
              <Switch
                {...label}
                defaultChecked={completed}
                value={completed}
                onChange={() => setCompleted(!completed)}
                color="primary"
              />
              <p>Reading</p>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col gap-6">
          {books
            .filter((book) =>
              completed ? book.completed === true : !book.completed
            )
            .map((book) => (
              <Link
                href={`/book/${book.id}`}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } flex flex-row gap-6 rounded-lg shadow p-2 transition duration-500`}
              >
                <div className="w-1/6 hidden md:block">
                  <img src={book.image} alt="" />
                </div>
                <div className="w-1/2 pl-2">
                  <p className="text-3xl font-bold">{book.name}</p>
                  <p className="pt-6">{book.author}</p>
                </div>
                <div className="w-1/4 flex justify-center items-center">
                  <p className="truncate">Comments: {book.comment}</p>
                </div>
                <div className="w-1/4  flex justify-center items-center">
                  <CircularStatic
                    value={book.percentage}
                    size={80}
                    darkMode={darkMode}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
