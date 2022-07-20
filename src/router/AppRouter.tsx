import { useRoutes } from "raviger";
import Home from "../components/Home";

const routes = {
  "/": () => <Home />,
};

export default function AppRouter(props: { user: any }) {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}
