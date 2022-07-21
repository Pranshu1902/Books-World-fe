import { useRoutes } from "raviger";
import Home from "../components/Home";
import Login from "../components/User/Login";
import Signup from "../components/User/Signup";

const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
};

export default function AppRouter(props: { user: any }) {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
