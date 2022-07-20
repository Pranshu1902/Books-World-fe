import { useEffect } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { navigate } from "raviger";

function App() {
  const currentUser: any = null;
  // const [currentUser, setCurrentUser] = useState<User>(null);
  // useEffect(() => {
  //   if (!currentUser && !localStorage.getItem("token")) {
  //     navigate("/login");
  //   }

  // me().then((currentUsers) => {
  //   setCurrentUser(currentUsers);
  // });
  // }, []);

  return <AppRouter user={currentUser} />;
}

export default App;
