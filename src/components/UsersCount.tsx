import { useEffect, useState } from "react";
import { getUsersCount } from "../api/ApiUtils";

export default function UsersCount() {
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    getUsersCount().then((data) => {
      setUsersCount(data.length);
    });
  }, []);
  return (
    <div className="text-xl bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] min-h-screen flex flex-col justify-center items-center">
      <p>Users count:</p>
      <p
        className="text-[#66fcf1] font-bold animate-pulse text-9xl"
        style={{ fontSize: "170px" }}
      >
        {usersCount}
      </p>
    </div>
  );
}
