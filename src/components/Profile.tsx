import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { me, updateUser } from "../api/ApiUtils";
import { mode } from "../Common/Data";
import Header from "../Common/Header";
import Popup from "../Common/Popup";
import UpdatePassword from "../Modals/UpdatePassword";
import { tabs } from "../type/DataTypes";

export default function Profile() {
  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [updatePass, setUpdatePass] = useState(false);
  const [darkMode, setDarkMode] = useState(mode);

  tabs.map((tab) => {
    tab.title === "Profile" ? (tab.active = true) : (tab.active = false);
  });

  const updateUserInfo = () => {
    updateUser(id, username, email, firstName, lastName, password);
  };

  useEffect(() => {
    me().then((data) => {
      console.log(data);

      setUsername(data.username);
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setId(data.id);
      setPassword(data.password);
    });

    document.title = "Profile | Book's World";
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } p-4 min-h-screen transition duration-500`}
      >
        <p
          className={`${
            darkMode ? "text-white" : "text-gray-600"
          } text-4xl font-bold pb-4 transition duration-500`}
        >
          Profile
        </p>

        <div className="p-4">
          <div className="flex justify-center">
            <div
              className={`${
                darkMode ? "text-white" : ""
              } grid grid-cols-1 md:grid-cols-2 pt-6 gap-12 transition duration-500`}
            >
              <div>
                <p className="text-xl font-bold">First Name:</p>
                <TextField
                  variant="outlined"
                  className={`${
                    darkMode ? "bg-gray-400" : "bg-white"
                  } shadow-lg transition duration-500`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <p className="text-xl font-bold">Last Name:</p>
                <TextField
                  variant="outlined"
                  className={`${
                    darkMode ? "bg-gray-400" : "bg-white"
                  } shadow-lg transition duration-500`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <p className="text-xl font-bold">Username:</p>
                <TextField
                  variant="outlined"
                  className={`${
                    darkMode ? "bg-gray-400" : "bg-white"
                  } shadow-lg transition duration-500`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <p className="text-xl font-bold">Email:</p>
                <TextField
                  variant="outlined"
                  className={`${
                    darkMode ? "bg-gray-400" : "bg-white"
                  } shadow-lg transition duration-500`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center p-6 pt-12">
            <Button
              variant="contained"
              type="submit"
              onClick={updateUserInfo}
              onSubmit={updateUserInfo}
            >
              Update Info
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#13ae4b", color: "white" }}
              onClick={() => setUpdatePass(true)}
            >
              Change Password
            </Button>
          </div>
        </div>
        <Popup open={updatePass} onClose={() => setUpdatePass(false)}>
          <UpdatePassword
            closeCB={() => setUpdatePass(false)}
            darkMode={darkMode}
          />
        </Popup>
      </div>
    </div>
  );
}
