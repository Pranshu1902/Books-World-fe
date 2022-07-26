import { Switch } from "@material-ui/core";
import { Link } from "raviger";
import { useEffect, useState } from "react";
import { getBooks } from "../api/ApiUtils";
import CircularStatic from "../Common/CircularProgress";
import { books, mode } from "../Common/Data";
import Header from "../Common/Header";
import { bookType, tabs } from "../type/DataTypes";

export default function Books() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [completed, setCompleted] = useState(true);
  const [darkMode, setDarkMode] = useState(mode);

  const emptyBooksArray: bookType[] = [];
  const [books, setBooks] = useState(emptyBooksArray);

  const fetchData = () => {
    getBooks().then((data) => {
      setBooks(data);
    });
  };

  tabs.map((tab) => {
    tab.title === "Books" ? (tab.active = true) : (tab.active = false);
  });

  useEffect(() => {
    fetchData();

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
                  books.filter((book: bookType) =>
                    completed
                      ? book.status === "Completed"
                      : book.status !== "Completed"
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
          {books.filter((book: bookType) =>
            completed
              ? book.status === "Completed"
              : book.status !== "Completed"
          ).length ? (
            books
              .filter((book: bookType) =>
                completed
                  ? book.status === "Completed"
                  : book.status !== "Completed"
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
                    <p className="truncate">Comments: {"book.comment"}</p>
                  </div>
                  <div className="w-1/4  flex justify-center items-center">
                    <CircularStatic value={50} size={80} darkMode={darkMode} />
                  </div>
                </Link>
              ))
          ) : (
            <div
              className={`${
                darkMode ? "text-white" : "text-gray-500"
              } text-3xl font-bold flex justify-center items-center`}
            >
              No Books Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
