import Dashboard from "../Common/Dashboard";

export default function Profile() {
  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Profile" />
        fixed
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen">
        Profile
      </div>
    </div>
  );
}
