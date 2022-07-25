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

export default function UpdateBookStatus(props: {
  closeCB: () => void;
  book: any;
}) {
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
      <h1 className="text-4xl font-semibold text-blue-500 flex items-center justify-center">
        Update Status
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 md:w-1/2 justify-center">
            <p className="font-semibold text-xl text-gray-500">Status</p>
            <NativeSelect
              variant="outlined"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={status}
            >
              <option value="Completed">Completed</option>
              <option value="Reading">Reading</option>
              <option value="Aborted">Aborted</option>
            </NativeSelect>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "#00D100", color: "white" }}
          >
            Update
          </Button>
          <Button variant="contained" onClick={() => props.closeCB()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
