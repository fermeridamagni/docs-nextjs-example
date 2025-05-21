export type SideBarSection = {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  items?: Item[];
};

export type SideBarItem = {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  items?: Item[];
};
