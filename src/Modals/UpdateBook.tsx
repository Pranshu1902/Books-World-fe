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

export default function UpdateBook(props: { closeCB: () => void; book: any }) {
  const [name, setName] = useState(props.book.name);
  const [author, setAuthor] = useState(props.book.author);
  const [pagesRead, setPagesRead] = useState(props.book.pagesRead);
  const [pagesTotal, setPagesTotal] = useState(props.book.totalPages);
  const [time, setTime] = useState(props.book.completedIn);
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
              type="text"
              onChange={(e) => setPagesTotal(e.target.value)}
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
            /
            <TextField
              value={pagesTotal}
              type="text"
              title="Total Pages"
              name="Total Pages"
              onChange={(e) => setPagesTotal(e.target.value)}
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
              className="py-2 p-2 border-2 border-green-300 rounded-lg"
            />
          </div>
          {/* <div className="flex flex-col gap-2 md:w-1/2 justify-center">
            <p className="font-semibold text-xl text-gray-500">Status</p>
            {/* <InputLabel
              id="updateStatus"
              className="font-semibold text-xl text-gray-500"
            >
              Status
            </InputLabel>
            <Select
              labelId="updateStatus"
              value={status}
              variant="outlined"
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={"Completed"}>Completed</MenuItem>
              <MenuItem value={"Reading"}>Reading</MenuItem>
              <MenuItem value={"Aborted"}>Aborted</MenuItem>
            </Select>
            <NativeSelect
              variant="outlined"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={status}
            >
              <option value="Completed">Completed</option>
              <option value="Reading">Reading</option>
              <option value="Aborted">Aborted</option>
            </NativeSelect>
          </div> */}
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
