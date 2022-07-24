import CircularStatic from "../Common/CircularProgress";
import Dashboard from "../Common/Dashboard";
import { books } from "../Common/Data";

export default function Books() {
  return (
    <div className="flex">
      <div className="w-1/5 fixed">
        <Dashboard currentTab="Books" />
        fixed
      </div>
      <div className="w-4/5 p-4 absolute right-0 bg-gray-100 min-h-screen">
        <p className="text-4xl font-bold text-gray-600 pb-4">Books</p>
        <div className="pt-12 flex flex-col gap-6">
          {books.map((book) => (
            <div className="flex flex-row gap-6 bg-white rounded-lg shadow p-2">
              <div className="w-1/2">
                <p className="text-3xl font-bold">{book.name}</p>
                <p className="pt-6">{book.author}</p>
              </div>
              <div className="w-1/4 flex justify-center items-center">
                <p className="truncate">Comments: {book.comment}</p>
              </div>
              <div className="w-1/4  flex justify-center items-center">
                <CircularStatic value={book.percentage} size={100} />
                {/* {book.completed ? (
                  <p className="bg-blue-300 rounded-full p-1 px-6">
                    <i className="fa fa-clock-o"></i> Days: {book.completedIn}
                  </p>
                ) : (
                  <div className="flex flex-col gap-4">
                    <p className="bg-red-300 rounded-full p-1 px-6">
                      <i className="fa fa-clock-o"></i> Days: {book.completedIn}
                    </p>
                    <p className="bg-green-300 rounded-full p-1 px-6">
                      Currently reading
                    </p>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
