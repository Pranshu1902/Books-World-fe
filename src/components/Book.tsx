import { Button, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
// import { books } from "../Common/Data";
import CircularStatic from "../Common/CircularProgress";
import { bookType, commentType, tabs } from "../type/DataTypes";
import Header from "../Common/Header";
import Popup from "../Common/Popup";
import UpdateBook from "../Modals/UpdateBook";
import UpdateBookStatus from "../Modals/UpdateBookStatus";
import DeleteBook from "../Modals/DeleteBook";
import AddComment from "../Modals/AddComment";
import { getBooks, getComments } from "../api/ApiUtils";

export default function Book(props: { id: number }) {
  const [updateBook, setUpdateBook] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteBook, setDeleteBook] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [addComment, setAddComment] = useState(false);

  const sampleComment: commentType[] = [];
  const [comments, setComments] = useState(sampleComment);

  const sampleBook: bookType = {
    id: 1,
    name: "a",
    author: "a",
    totalPages: 0,
    pagesRead: 0,
    timeTaken: 0,
    status: "Completed",
  };
  const [book, setBook] = useState(sampleBook);
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    getBooks().then((data) => {
      const displayBook: bookType = data.filter(
        (book: bookType) => Number(book.id) === Number(props.id)
      )[0];
      setBook(displayBook);
      setLoading(false);
      document.title = displayBook.name + " | Book's World";
    });

    setCommentLoading(true);
    getComments().then((data) => {
      console.log(data);
      // filtering the comments for this book
      const thisComments: commentType[] = data.filter(
        (comment: commentType) => Number(comment.book.id) === Number(props.id)
      );
      setComments(thisComments);
      setCommentLoading(false);
    });
  };

  tabs.map((tab) => {
    tab.title === "Books" ? (tab.active = true) : (tab.active = false);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } min-h-screen gap-2 transition duration-500`}
      >
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <CircularProgress color="primary" />
          </div>
        ) : (
          <div className="p-6 flex flex-col gap-6">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              } flex flex-col gap-6 p-4 rounded-lg text-gray-500 transition duration-500`}
            >
              <div className="flex justify-between flex-col md:flex-row gap-4">
                <div className="flex flex-col md:flex-row justify-start gap-2 w-4/5">
                  <img src={"book.image"} className="md:w-1/5" alt="" />
                  <div>
                    <p
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      } text-5xl font-bold transition duration-500`}
                    >
                      {book.name}
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="p-2">
                        <CircularStatic
                          value={(book.pagesRead / book.totalPages) * 100}
                          size={70}
                          darkMode={darkMode}
                        />
                      </div>
                      {book.status === "Abandoned" ? (
                        <div className="flex gap-2">
                          <p>Status:</p>
                          <p className="bg-red-500 text-white px-6 rounded-full font-medium">
                            Abandoned
                          </p>
                        </div>
                      ) : book.status === "Completed" ? (
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
                      <div className="flex items-center gap-2">
                        <p className="text-gray-400">Author:</p>
                        <p
                          className={`${
                            darkMode ? "text-white" : ""
                          } font-medium text-xl transition duration-500`}
                        >
                          {book.author}
                        </p>
                      </div>
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
                    style={{ backgroundColor: "#13ae4b", color: "white" }}
                    onClick={() => setAddComment(true)}
                  >
                    <i className="fa fa-plus"></i>&nbsp;Add New Comment
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
              <div className="flex flex-col gap-6 md:flex-row justify-between">
                <div className="flex flex-col gap-6">
                  <div className="pt-6 flex gap-2 items-center">
                    <p className="text-gray-400">Pages:</p>
                    <p
                      className={`${
                        darkMode ? "text-white" : ""
                      } text-2xl font-medium`}
                    >
                      {book.pagesRead} / {book.totalPages}
                    </p>
                  </div>
                  {book.status === "Completed" ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">Time taken:</p>
                      <p className="text-2xl font-medium bg-green-500 rounded-full px-6 text-white">
                        {book.timeTaken} days
                      </p>
                    </div>
                  ) : book.status === "Abandoned" ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">Time taken:</p>
                      <p className="text-2xl font-medium bg-red-500 rounded-full px-6 text-white">
                        {book.timeTaken} days
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">Time taken:</p>
                      <p className="text-2xl font-medium bg-yellow-400 rounded-full px-6 text-white">
                        {book.timeTaken} days
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`${
                darkMode ? "text-gray-500" : ""
              } transition duration-500`}
            >
              <p className="text-xl font-bold">Comments:</p>
              {commentLoading ? (
                <div className="flex justify-center w-full">
                  <CircularProgress color="primary" />
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {comments.length ? (
                    comments.map((comment: commentType) => (
                      <p
                        className={`${
                          darkMode
                            ? "bg-gray-800 text-white"
                            : "text-gray-500 bg-white"
                        } text-2xl mt-4 font-medium p-4 rounded-lg w-full transition duration-500`}
                      >
                        {comment.text}
                      </p>
                    ))
                  ) : (
                    <div
                      className={`${
                        darkMode
                          ? "text-white bg-gray-800"
                          : "text-gray-500 bg-white"
                      } text-3xl font-bold p-4 w-full rounded-lg flex justify-center`}
                    >
                      No Comments Found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <Popup open={updateBook} onClose={() => setUpdateBook(false)}>
          <UpdateBook
            closeCB={() => setUpdateBook(false)}
            book={book}
            darkMode={darkMode}
          />
        </Popup>
        <Popup open={updateStatus} onClose={() => setUpdateStatus(false)}>
          <UpdateBookStatus
            closeCB={() => setUpdateStatus(false)}
            book={book}
            darkMode={darkMode}
          />
        </Popup>
        <Popup open={deleteBook} onClose={() => setDeleteBook(false)}>
          <DeleteBook
            closeCB={() => setDeleteBook(false)}
            book={book}
            darkMode={darkMode}
          />
        </Popup>
        <Popup open={addComment} onClose={() => setAddComment(false)}>
          <AddComment
            closeCB={() => setAddComment(false)}
            darkMode={darkMode}
          />
        </Popup>
      </div>
    </div>
  );
}
