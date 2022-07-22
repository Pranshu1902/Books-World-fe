import Dashboard from "../Common/Dashboard";

export default function Books() {
  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Books" />
        fixed
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen">
        <p className="text-4xl font-bold text-gray-600 pb-4">Books</p>
      </div>
    </div>
  );
}
