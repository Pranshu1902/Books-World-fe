export type dashBoardTab = {
  name: string;
  link: string;
  icon: string;
};

export type linkType = {
  title: string;
  active: boolean;
  link: string;
  icon: string;
};

export type bookType = {
  id: number;
  name: string;
  author: string;
  image?: any;
  totalPages: number;
  pagesRead: number;
  timeTaken: number;
  status: string;
};

export type commentType = {
  id?: number;
  text: string;
  created_at: Date;
  book: number;
};

export const tabs: linkType[] = [
  {
    title: "Home",
    link: "/home",
    icon: "fa fa-home",
    active: true,
  },
  {
    title: "Books",
    link: "/books",
    icon: "fa fa-book",
    active: false,
  },
  {
    title: "Profile",
    link: "/profile",
    icon: "fas fa-user-alt",
    active: false,
  },
];
