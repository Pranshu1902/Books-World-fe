import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { books } from "../Common/Data";
import CircularStatic from "../Common/CircularProgress";
import { tabs } from "../type/DataTypes";
import Header from "../Common/Header";
import Popup from "../Common/Popup";
import UpdateBook from "../Modals/UpdateBook";
import UpdateBookStatus from "../Modals/UpdateBookStatus";
import DeleteBook from "../Modals/DeleteBook";

export default function Book(props: { id: number }) {
  const [updateBook, setUpdateBook] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteBook, setDeleteBook] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const book = books.filter((book) => book.id === props.id)[0];

  tabs.map((tab) => {
    tab.title === "Books" ? (tab.active = true) : (tab.active = false);
  });

  useEffect(() => {
    document.title = book.name + " | Book's World";
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="bg-gray-100 min-h-screen gap-2">
        <div className="p-6">
          <div className="flex flex-col gap-6 bg-white p-4 rounded-lg text-gray-500">
            <div className="flex justify-between flex-col md:flex-row gap-4">
              <div className="flex flex-row justify-start gap-2 w-4/5">
                <img
                  src={book.image}
                  className="w-1/5 hidden md:block"
                  alt=""
                />
                <div>
                  <p className="text-5xl font-bold text-black">{book.name}</p>
                  <div>
                    <div className="p-2">
                      <CircularStatic
                        value={book.percentage}
                        size={70}
                        darkMode={darkMode}
                      />
                    </div>
                    {book.abandoned ? (
                      <div className="flex gap-2">
                        <p>Status:</p>
                        <p className="bg-red-500 text-white px-6 rounded-full font-medium">
                          Abandoned
                        </p>
                      </div>
                    ) : book.completed ? (
                      <div className="flex gap-2">
                        <p>Status:</p>
                        <p className="bg-green-500 text-white px-6 rounded-full font-medium">
                          Completed
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <p>Status:</p>
                        <p className="bg-yellow-400 text-white px-6 rounded-full font-medium">
                          Reading
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:w-1/6 justify-center">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#13ae4b", color: "white" }}
                  onClick={() => setUpdateBook(true)}
                >
                  <i className="fa fa-edit"></i>&nbsp;Update Details
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#13ae4b", color: "white" }}
                  onClick={() => setUpdateStatus(true)}
                >
                  <i className="fa fa-edit"></i>&nbsp;Update Status
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => setDeleteBook(true)}
                >
                  <i className="fa fa-trash"></i>&nbsp;Delete Book
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-400">Author:</p>
              <p className="font-medium text-xl">{book.author}</p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row justify-between">
              <div className="flex flex-col gap-6">
                <div className="pt-6 flex gap-2 items-center">
                  <p className="text-gray-400">Pages:</p>
                  <p className="text-2xl font-medium">
                    {book.pagesRead} / {book.totalPages}
                  </p>
                </div>
                <div className="">
                  <p className="text-gray-400">Comments:</p>
                  <p className="text-2xl font-medium">{book.comment}</p>
                </div>
                {book.completed ? (
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400">Time taken:</p>
                    <p className="text-2xl font-medium bg-green-500 rounded-full px-6 text-white">
                      {book.completedIn} days
                    </p>
                  </div>
                ) : book.abandoned ? (
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400">Time taken:</p>
                    <p className="text-2xl font-medium bg-red-500 rounded-full px-6 text-white">
                      {book.completedIn} days
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400">Time taken:</p>
                    <p className="text-2xl font-medium bg-yellow-400 rounded-full px-6 text-white">
                      {book.completedIn} days
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Popup open={updateBook} onClose={() => setUpdateBook(false)}>
          <UpdateBook closeCB={() => setUpdateBook(false)} book={book} />
        </Popup>
        <Popup open={updateStatus} onClose={() => setUpdateStatus(false)}>
          <UpdateBookStatus
            closeCB={() => setUpdateStatus(false)}
            book={book}
          />
        </Popup>
        <Popup open={deleteBook} onClose={() => setDeleteBook(false)}>
          <DeleteBook closeCB={() => setDeleteBook(false)} book={book} />
        </Popup>
      </div>
    </div>
  );
}
