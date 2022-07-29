const baseURL = "https://books-world-pranshu1902.herokuapp.com/";
// const baseURL = "http://127.0.0.1:8000/";

type methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// main request function
const request: any = async (
  method: methods = "GET",
  data: any = {},
  endpoint: string
) => {
  let url;
  let payload: string;

  if (method === "GET") {
    const requestParams = data
      ? `?${Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join("&")}`
      : "";
    url = `${baseURL}${endpoint}${requestParams}`;
    payload = "";
  } else {
    url = `${baseURL}${endpoint}`;
    payload = data ? JSON.stringify(data) : "";
  }

  // Token Authentication
  const token = localStorage.getItem("token");
  const auth = token ? "Token " + localStorage.getItem("token") : "";

  try {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: method !== "GET" ? payload : null,
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const errorJson = await response.json();
      throw Error(errorJson);
    }
  } catch (error) {
    return error;
  }
};

export const login = async (username: string, password: string) => {
  const data = { username: username, password: password };
  return request("POST", data, "api-token-auth/");
};

export const signup = async (username: string, password: string) => {
  const data = { username: username, password: password };
  return request("POST", data, "user/");
};

export const getBooks = async () => {
  return request("GET", {}, "books/");
};

export const addBook = async (data: any) => {
  return request("POST", data, "books/");
};

export const getComments = async () => {
  return request("GET", {}, "comment/");
};

export const addComment = async (comment: string, book: any) => {
  const data = { text: comment, book: book.id };
  return request("POST", data, "comment/");
};

export const updateComment = async (
  newComment: string,
  bookId: number,
  id: number
) => {
  const data = { text: newComment, book: bookId };
  return request("PUT", data, `comment/${id}/`);
};

export const updateBook = async (
  name: string,
  author: string,
  pagesRead: number,
  pagesTotal: number,
  time: number,
  status: string,
  bookId: number
) => {
  const data = {
    id: bookId,
    name: name,
    // image: bookImage,
    author: author,
    pagesRead: pagesRead,
    totalPages: pagesTotal,
    timeTaken: time,
    status: status,
  };
  return request("PUT", data, "books/" + bookId.toString() + "/");
};

export const updateBookStatus = async (status: string, book: any) => {
  const data = {
    id: book.id,
    name: book.name,
    author: book.author,
    status: status,
  };
  console.log(data);
  return request("PUT", data, "books/" + book.id.toString() + "/");
};

export const updateBookImage = async (image: string, book: any) => {
  const data = {
    id: book.id,
    name: book.name,
    author: book.author,
    imageLink: image,
  };
  console.log(data);
  return request("PUT", data, "books/" + book.id.toString() + "/");
};

export const deleteBook = async (bookId: number) => {
  return request("DELETE", {}, "books/" + bookId.toString() + "/");
};

export const me = async () => {
  return request("GET", {}, "api/user/");
};

export const updateUser = async (
  userID: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  const data = {
    username: username,
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  };
  return request("PUT", data, "user/" + userID.toString() + "/");
};

export const updatePassword = async (
  newPassword: string,
  userId: number,
  user: any
) => {
  const data = {
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: newPassword,
  };
  return request("PUT", data, "user/" + userId.toString() + "/");
};
