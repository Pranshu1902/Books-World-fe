import { Switch } from "@material-ui/core";
import { useState } from "react";
import Header from "../Common/Header";
import { tabs } from "../type/DataTypes";

export default function History() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [completed, setCompleted] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  tabs.map((tab) => {
    tab.title === "History" ? (tab.active = true) : (tab.active = false);
  });

  return (
    <div className="flex flex-col">
      <div className="bg-green-800">
        <Header tabs={tabs} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between">
          <p className="text-4xl font-bold text-gray-600 pb-4">History</p>
          <div className="flex gap-2 justify-center items-center">
            <p>Completed</p>
            <Switch
              {...label}
              defaultChecked={completed}
              value={completed}
              onChange={() => setCompleted(!completed)}
              color="secondary"
            />
            <p>Reading</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-12">
          {/* {books
            .filter((book) => (completed ? book.completed : !book.completed))
            .map((book) => (
              <div className="bg-white rounded-lg p-2">
                <p className="text-3xl font-bold">{book.name}</p>
                <p className="pt-6">{book.author}</p>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}
