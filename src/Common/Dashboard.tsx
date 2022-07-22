import { Link } from "raviger";
import logo from "../images/logo.png";
import { dashBoardTab } from "../type/DataTypes";

export default function Dashboard(props: { currentTab: string }) {
  const tabs: dashBoardTab[] = [
    { name: "Home", link: "/home", icon: "fa fa-home" },
    { name: "Books", link: "/books", icon: "fa fa-book" },
    { name: "History", link: "/history", icon: "fa fa-history" },
    { name: "Profile", link: "/profile", icon: "fa fa-user-circle-o" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="bg-[#109908] min-h-screen text-white p-2">
      <div>
        <div className="flex gap-4 w-full justify-center items-center">
          <img src={logo} alt="" width={"10%"} />
          <div className="text-4xl font-bold">Book's World</div>
        </div>
        <div className="text-2xl pt-12 pl-4 flex flex-col gap-2 text-green-300">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className={`
                ${
                  tab.name === props.currentTab ? "bg-green-600 text-white" : ""
                } hover:bg-green-700 p-2 rounded-lg hover:text-white transition duration-100
              `}
            >
              <i className={tab.icon}></i>&nbsp;{tab.name}
            </Link>
          ))}
        </div>
        <div className="bottom-6 p-4 absolute flex gap-2">
          <div className="flex justify-center items-center">
            <i className="fa fa-user-circle-o text-4xl"></i>
          </div>
          <div>
            <p className="font-bold text-xl">{"username"}</p>
            <button
              onClick={logout}
              className="text-red-500 font-medium hover:red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
