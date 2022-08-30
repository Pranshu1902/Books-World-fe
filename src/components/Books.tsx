import { Switch } from "@material-ui/core";
import { Link } from "raviger";
import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { TailSpin } from "react-loader-spinner";
import { getBooks, getComments } from "../api/ApiUtils";
import { mode } from "../Common/Data";
import Header from "../Common/Header";
import { bookType, commentType, tabs } from "../type/DataTypes";

export default function Books() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [completed, setCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(mode);
  const [loading, setLoading] = useState(true);

  const emptyBooksArray: bookType[] = [];
  const [books, setBooks] = useState(emptyBooksArray);

  const sampleComment: commentType[] = [];
  const [comments, setComments] = useState(sampleComment);

  const fetchData = () => {
    setLoading(true);
    getBooks().then((data) => {
      setBooks(data.reverse());
    });

    getComments().then((data) => {
      setComments(data);
      setLoading(false);
    });
  };

  tabs.forEach((tab) => {
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
                {books.length
                  ? books.filter((book: bookType) =>
                      completed
                        ? book.status === "Completed"
                        : book.status !== "Completed"
                    ).length
                  : 0}
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <p>Reading</p>
              <Switch
                {...label}
                defaultChecked={completed}
                value={completed}
                onChange={() => setCompleted(!completed)}
                color="primary"
              />
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col gap-6">
          {loading ? (
            <div className="flex justify-center items-center">
              <TailSpin
                color="#13ae4b"
                height={70}
                width={70}
                ariaLabel="loading-indicator"
              />
            </div>
          ) : books.filter((book: bookType) =>
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
                  } flex flex-row gap-6 rounded-lg shadow p-2 transition duration-500 hover:scale-105`}
                >
                  <div className="w-1/6 hidden md:block">
                    <img
                      src={
                        book.imageLink === ""
                          ? "http://books-world-pranshu1902.herokuapp.com/static/default.png"
                          : book.imageLink
                      }
                      alt={`${book.name} logo`}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <p className="text-3xl font-bold">{book.name}</p>
                    <p className="pt-6">{book.author}</p>
                  </div>
                  <div className="w-1/4 flex justify-center items-center">
                    <p
                      className={`${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } rounded-full p-2 flex gap-2 transition duration-500`}
                    >
                      Comments:{" "}
                      <p>
                        {
                          comments.filter(
                            (comment) =>
                              Number(comment.book) === Number(book.id)
                          ).length
                        }
                      </p>
                    </p>
                  </div>
                  <div className="w-1/4 flex justify-center items-center">
                    <div className="text-3xl md:w-1/3">
                      <CircularProgressbar
                        value={(book.pagesRead / book.totalPages) * 100}
                        text={`${(book.pagesRead / book.totalPages) * 100}%`}
                        styles={buildStyles({
                          textColor: darkMode ? "white" : "#13ae4b",
                          pathColor: "#13ae4b",
                        })}
                      />
                    </div>
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
