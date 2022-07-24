import Dashboard from "../Common/Dashboard";
import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { books } from "../Common/Data";
import CircularStatic from "../Common/CircularProgress";
import { Link } from "raviger";

export default function Book(props: { id: number }) {
  const [search, setSearch] = useState("");

  const book = books.filter((book) => book.id === props.id)[0];

  useEffect(() => {
    document.title = book.name + " | Book's World";
  }, []);

  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Books" />
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen gap-2">
        <div className="p-6">
          <div className="flex flex-col gap-6 bg-white p-6 rounded-lg text-gray-500">
            <div className="flex flex-row justify-start gap-2">
              <img src={book.image} className="w-1/5" alt="" />
              <div>
                <p className="text-5xl font-bold text-black">{book.name}</p>
                <div>
                  <div className="p-2">
                    <CircularStatic value={book.percentage} size={70} />
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
            <div className="flex items-center gap-2">
              <p className="text-gray-400">Author:</p>
              <p className="font-medium text-xl">{book.author}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
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
              <div className="flex flex-col gap-4">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  <i className="fa fa-edit"></i>&nbsp;Update Details
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  <i className="fa fa-edit"></i>&nbsp;Update Status
                </Button>
                <Button variant="contained" style={{ backgroundColor: "red" }}>
                  <i className="fa fa-trash"></i>&nbsp;Delete Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
