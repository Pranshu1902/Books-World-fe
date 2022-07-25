import React, { useEffect } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    customSize: number;
    darkMode: boolean;
  }
) {
  const [textColor, setTextColor] = React.useState("black");

  useEffect(() => {
    props.darkMode ? setTextColor("white") : setTextColor("black");
  }, [props.darkMode]);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size={props.customSize}
        {...props}
        style={{ color: "#00FF00" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{ fontSize: "20px", color: textColor }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic(props: {
  value: number;
  size: number;
  darkMode: boolean;
}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value ? props.value : prevProgress + 10
      );
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgressWithLabel
      value={progress}
      customSize={props.size}
      darkMode={props.darkMode}
    />
  );
}
