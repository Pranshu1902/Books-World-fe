export const mode = () => {
  if (localStorage.getItem("mode")) {
    return localStorage.getItem("mode") === "dark";
  } else {
    localStorage.setItem("mode", "light");
    return false;
  }
};
