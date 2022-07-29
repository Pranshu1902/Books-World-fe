import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { navigate } from "raviger";
import { me } from "./api/ApiUtils";

function App() {
  const user: any = null;
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    if (!currentUser && !localStorage.getItem("token")) {
      navigate("/");
    }

    me().then((currentUsers) => {
      setCurrentUser(currentUsers);
    });
  }, []);

  return <AppRouter user={currentUser} />;
}

export default App;
