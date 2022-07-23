import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import Dashboard from "../Common/Dashboard";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Profile" />
        fixed
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen">
        <p className="text-4xl font-bold text-gray-600 pb-4">Profile</p>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-6">
            <div>
              <p className="text-xl font-bold">First Name:</p>
              <TextField
                variant="outlined"
                className="bg-white shadow-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Last Name:</p>
              <TextField
                variant="outlined"
                className="bg-white shadow-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Username:</p>
              <TextField
                variant="outlined"
                className="bg-white shadow-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Email:</p>
              <TextField
                variant="outlined"
                className="bg-white shadow-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-6 pt-12">
            <Button variant="contained">Update Info</Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#13ae4b", color: "white" }}
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
