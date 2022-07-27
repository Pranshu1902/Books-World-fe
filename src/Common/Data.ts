export const books = [
  {
    id: 1,
    name: "How to turn down a billion dollars",
    author: "Evan Spiegel",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: true,
    comment:
      "I love this book, learnt a lot about silicon valley and the world of startups",
    percentage: 100,
    totalPages: 300,
    pagesRead: 10,
  },
  {
    id: 2,
    name: "Book 1",
    author: "Steve Jobs",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: true,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 100,
    totalPages: 300,
    pagesRead: 20,
  },
  {
    id: 3,
    name: "Book 2",
    author: "Elon Musk",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: false,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 20,
    totalPages: 300,
    pagesRead: 50,
  },
  {
    id: 4,
    name: "Book 3",
    author: "Jeff Bezos",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: true,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 100,
    totalPages: 300,
    pagesRead: 200,
  },
  {
    id: 5,
    name: "Book 4",
    author: "Sundar Pichai",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: false,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 75,
    totalPages: 300,
    pagesRead: 250,
  },
  {
    id: 6,
    name: "Book 5",
    author: "Silicon valley",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: true,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 100,
    totalPages: 300,
    pagesRead: 80,
  },
  {
    id: 7,
    name: "The book of the future",
    author: "TBBT",
    image: "https://mpd-biblio-covers.imgix.net/9781250108623.jpg",
    completedIn: 25,
    completed: false,
    comment: "Amazing book with insightful knowledge of the world",
    percentage: 50,
    abandoned: true,
    totalPages: 300,
    pagesRead: 100,
  },
];

// export let mode = false;

export const mode = () => {
  if (localStorage.getItem("mode")) {
    return localStorage.getItem("mode") === "dark";
  } else {
    localStorage.setItem("mode", "light");
    return false;
  }
};
