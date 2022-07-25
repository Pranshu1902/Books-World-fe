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
    icon: "fa fa-user-circle-o",
    active: false,
  },
];
