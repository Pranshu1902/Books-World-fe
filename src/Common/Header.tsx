import { Link, navigate } from "raviger";
import logo from "../images/logo.png";
import DropDown from "../Common/DropDown";
import { linkType } from "../type/DataTypes";
import DarkModeSlider from "../Common/DarkModeSlider";

export default function Header(props: {
  tabs: linkType[];
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) {
  const updateDarkModeStatus = () => {
    localStorage.setItem("mode", props.darkMode === true ? "light" : "dark");
    props.setDarkMode(!props.darkMode);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-6 flex justify-between text-white">
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="" width={"10%"} />
        <p className="text-2xl font-bold">Book's World</p>
      </a>
      {/* Desktop View */}
      <div className="hidden md:flex gap-2">
        <div className="flex flex-row gap-6 text-xl justify-end text-green-300">
          {props.tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className={`${
                tab.active ? "text-white" : ""
              } hover:text-white hover:bg-green-700 rounded-lg p-2 transition duration-500 flex gap-1 justify-center items-center`}
            >
              <i className={tab.icon}></i> {tab.title}
            </Link>
          ))}
        </div>
        <div className="w-full">
          <DarkModeSlider
            darkMode={props.darkMode}
            setDarkMode={updateDarkModeStatus}
          />
        </div>
        <div
          onClick={logoutUser}
          className="text-red-500 hover:text-red-700 cursor-pointer flex justify-center items-center"
        >
          Logout
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-2 justify-start">
        <DropDown filters={props.tabs} />
        <DarkModeSlider
          darkMode={props.darkMode}
          setDarkMode={updateDarkModeStatus}
        />
      </div>
    </div>
  );
}
