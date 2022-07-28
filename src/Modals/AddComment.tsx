import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addComment } from "../api/ApiUtils";

export default function AddComment(props: {
  closeCB: () => void;
  darkMode: boolean;
  book: any;
}) {
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = async (event: any) => {
    // validation
    if (comment.length !== 0) {
      setLoading(true);
      event.preventDefault();
      addComment(comment, props.book).then(() => {
        props.closeCB();
        setLoading(false);
      });
    }
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-800" : ""} p-6`}>
      <h1
        className={`${
          props.darkMode ? "text-white" : "text-blue-500"
        } text-4xl font-semibold flex items-center justify-center`}
      >
        Add New Comment
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 pt-12 gap-6">
        <div className="flex flex-col gap-6 justify-center">
          <TextField
            variant="outlined"
            label="Comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            color={`${props.darkMode ? "secondary" : "primary"}`}
          />
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
              Add
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
