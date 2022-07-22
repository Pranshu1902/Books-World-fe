import Dashboard from "../Common/Dashboard";

export default function Books() {
  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Books" />
        fixed
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen">
        Books
      </div>
    </div>
  );
}
