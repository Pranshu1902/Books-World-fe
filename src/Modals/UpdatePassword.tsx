import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
// import { updatePassword } from "../api/ApiUtils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: localStorage.getItem("mode") === "dark" ? "white" : "black",
  },
});

export default function UpdatePassword(props: {
  closeCB: () => void;
  darkMode: boolean;
  userId: number;
  user: any;
}) {
  const classes = useStyles();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    if (confirmNewPassword === newPassword) {
      setLoading(true);
      event.preventDefault();
      // updatePassword(newPassword, props.userId, props.user).then(() => {
      //   props.closeCB();
      //   setLoading(false);
      // });
      setLoading(false);
    }
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-700" : ""} p-6`}>
      <h1
        className={`${
          props.darkMode ? "text-white" : "text-black"
        } text-4xl font-semibold flex items-center justify-center`}
      >
        Update Password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 pt-12 gap-6">
        <div className="flex flex-col gap-6 justify-center">
          <TextField
            variant="outlined"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            inputProps={{ className: classes.input }}
            type="password"
            color={`${props.darkMode ? "secondary" : "primary"}`}
          />
          <TextField
            variant="outlined"
            label="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            inputProps={{ className: classes.input }}
            type="password"
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
              Update
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
