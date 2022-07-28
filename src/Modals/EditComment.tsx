import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { updateComment } from "../api/ApiUtils";
import { commentType } from "../type/DataTypes";

export default function EditComment(props: {
  closeCB: () => void;
  darkMode: boolean;
  commentId: number;
  comment: commentType;
}) {
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState(props.comment.text);

  const handleSubmit = async (event: any) => {
    // validation
    if (newComment.length !== 0) {
      setLoading(true);
      event.preventDefault();
      updateComment(newComment, props.comment.book, props.commentId);
      props.closeCB();
      setLoading(false);
    }
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-800" : ""} p-6`}>
      <h1
        className={`${
          props.darkMode ? "text-white" : "text-blue-500"
        } text-4xl font-semibold flex items-center justify-center`}
      >
        Update Comment
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 pt-12 gap-6">
        <div className="flex flex-col gap-6 justify-center">
          <TextField
            variant="outlined"
            label="Comment"
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            color={`${props.darkMode ? "secondary" : "primary"}`}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin
              color="#13ae4b"
              height={50}
              width={50}
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
