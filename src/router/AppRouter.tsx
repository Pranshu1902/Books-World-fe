import { useRoutes } from "raviger";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Books from "../components/Books";
import Login from "../components/User/Login";
import Signup from "../components/User/Signup";
import Profile from "../components/Profile";
import Book from "../components/Book";

const routes = {
  "/": () => <LandingPage />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/home": () => <Home />,
  "/books": () => <Books />,
  // "/history": () => <History />,
  "/profile": () => <Profile />,
  "/book/:id": ({ id }: { id: string }) => <Book id={Number(id)} />,
};

export default function AppRouter(props: { user: any }) {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
