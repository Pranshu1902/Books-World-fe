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

export default function UpdatePassword(props: {
  closeCB: () => void;
  darkMode: boolean;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    props.closeCB();
    setLoading(false);
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-700" : ""} p-6`}>
      <h1
        className={`${
          props.darkMode ? "text-white" : "text-blue-500"
        } text-4xl font-semibold flex items-center justify-center`}
      >
        Update Password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 pt-12 gap-6">
        <div className="flex flex-col gap-6 justify-center">
          <TextField
            variant="outlined"
            label="New Password"
            type="password"
            color={`${props.darkMode ? "secondary" : "primary"}`}
          />
          <TextField
            variant="outlined"
            label="Confirm New Password"
            type="password"
            color={`${props.darkMode ? "secondary" : "primary"}`}
          />
        </div>
        <div className="flex justify-between">
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "#13ae4b", color: "white" }}
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
