import { Link } from "raviger";
import logo from "../images/logo.png";
import DropDown from "../Common/DropDown";
import { linkType } from "../type/DataTypes";
import DarkModeSlider from "../Common/DarkModeSlider";

export default function Header(props: {
  tabs: linkType[];
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) {
  const tabs = [
    { name: "Home", link: "/home", icon: "fa fa-home" },
    { name: "Books", link: "/books", icon: "fa fa-book" },
    { name: "History", link: "/history", icon: "fa fa-history" },
    { name: "Profile", link: "/profile", icon: "fa fa-user-circle-o" },
  ];

  return (
    <div className="p-6 flex justify-between text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" width={"10%"} />
        <p className="text-2xl font-bold">Book's World</p>
      </div>
      {/* Desktop View */}
      <div className="hidden fadeIn md:flex gap-2">
        <div className="flex flex-row gap-12 text-xl justify-end text-green-300">
          {props.tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className={`${
                tab.active ? "text-white" : ""
              } hover:text-white hover:bg-green-700 rounded-lg p-2 transition duration-500`}
            >
              <i className={tab.icon}></i> {tab.title}
            </Link>
          ))}
        </div>
        <div>
          <DarkModeSlider
            darkMode={props.darkMode}
            setDarkMode={props.setDarkMode}
          />
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-2 justify-start">
        <DropDown filters={props.tabs} />
        <DarkModeSlider
          darkMode={props.darkMode}
          setDarkMode={props.setDarkMode}
        />
      </div>
    </div>
  );
}
