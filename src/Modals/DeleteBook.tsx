import { Button } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { deleteBook } from "../api/ApiUtils";

export default function DeleteBook(props: {
  closeCB: () => void;
  book: any;
  darkMode: boolean;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    deleteBook(props.book.id).then(() => {
      props.closeCB();
      setLoading(false);
    });
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-800 text-white" : ""} p-6`}>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-6">
        <div className="flex gap-4">
          <i className="fa fa-exclamation-triangle text-red-500 text-3xl flex items-center"></i>
          <p>
            Are you sure you want to delete book: <b>{props.book.name}</b>?
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin
              color="red"
              height={40}
              width={40}
              ariaLabel="loading-indicator"
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div>
              <Button
                fullWidth
                className="w-full md:w-auto"
                variant="contained"
                onClick={() => props.closeCB()}
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                fullWidth
                className="w-full md:w-auto"
                variant="contained"
                type="submit"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
