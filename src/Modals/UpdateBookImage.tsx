import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { updateBookImage } from "../api/ApiUtils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: localStorage.getItem("mode") === "dark" ? "white" : "black",
  },
});

export default function UpdateBookImage(props: {
  closeCB: () => void;
  book: any;
  darkMode: boolean;
}) {
  const classes = useStyles();

  const [image, setImage] = useState(props.book.imageLink);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    updateBookImage(image, props.book).then(() => {
      props.closeCB();
      setLoading(false);
    });
  };

  return (
    <div className={`${props.darkMode ? "bg-gray-800 text-white" : ""} p-6`}>
      <h1 className="text-4xl font-semibold flex items-center justify-center">
        Update Image
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-6">
        <div className="flex flex-col gap-2 justify-center">
          <p className="font-semibold text-xl text-gray-500">Image Link:</p>
          <TextField
            variant="outlined"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Leave Blank for default image"
            inputProps={{ className: classes.input }}
            defaultValue={image}
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
