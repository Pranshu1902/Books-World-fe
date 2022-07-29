import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { updateBook } from "../api/ApiUtils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: localStorage.getItem("mode") === "dark" ? "white" : "black",
  },
});

export default function UpdateBook(props: {
  closeCB: () => void;
  book: any;
  darkMode: boolean;
}) {
  const classes = useStyles();

  const [name, setName] = useState(props.book.name);
  const [author, setAuthor] = useState(props.book.author);
  const [pagesRead, setPagesRead] = useState(props.book.pagesRead);
  const [pagesTotal, setPagesTotal] = useState(props.book.totalPages);
  const [time, setTime] = useState(props.book.timeTaken);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    updateBook(
      name,
      author,
      pagesRead,
      pagesTotal,
      time,
      props.book.status,
      props.book.id
    ).then(() => {
      props.closeCB();
      setLoading(false);
    });
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-800 text-white" : ""} p-6`}>
      <h1
        className={`${
          props.darkMode ? "text-white" : ""
        } text-4xl font-semibold flex items-center justify-center`}
      >
        Update book
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 font-semibold text-xl">Name:</p>
            <TextField
              value={name}
              variant="outlined"
              type="text"
              onChange={(e) => setName(e.target.value)}
              inputProps={{ className: classes.input }}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 font-semibold text-xl">Author:</p>
            <TextField
              value={author}
              variant="outlined"
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              inputProps={{ className: classes.input }}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-500">Pages:</p>
          <div className="flex gap-2">
            <TextField
              value={pagesRead}
              title="Pages Read"
              type="number"
              onChange={(e) => setPagesRead(e.target.value)}
              inputProps={{ className: classes.input }}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
            /
            <TextField
              value={pagesTotal}
              type="number"
              title="Total Pages"
              name="Total Pages"
              onChange={(e) => setPagesTotal(e.target.value)}
              inputProps={{ className: classes.input }}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 md:w-1/2">
            <p className="text-gray-500 font-semibold text-xl">Time Taken:</p>
            <TextField
              value={time}
              variant="outlined"
              type="number"
              onChange={(e) => setTime(Number(e.target.value))}
              inputProps={{ className: classes.input }}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin
              color="#13ae4b"
              height={40}
              width={40}
              ariaLabel="loading-indicator"
            />
          </div>
        ) : (
          <div className="flex justify-between">
            <Button variant="contained" onClick={() => props.closeCB()}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#13ae4b", color: "white" }}
            >
              Update
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
