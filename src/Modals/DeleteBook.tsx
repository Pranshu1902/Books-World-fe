import {
  Button,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function DeleteBook(props: { closeCB: () => void; book: any }) {
  const [status, setStatus] = useState(props.book.completed);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    props.closeCB();
    setLoading(false);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-6">
        <div className="flex gap-4">
          <i className="fa fa-exclamation-triangle text-red-500 text-3xl flex items-center"></i>
          <p>
            Are you sure you want to delete book: <b>{props.book.name}</b>?
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant="contained" onClick={() => props.closeCB()}>
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
