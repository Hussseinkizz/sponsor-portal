// ui mock data

import * as Icons from "react-icons/hi";
import * as Icons2 from "react-icons/hi2";

export const SideBarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        icon: (
          <Icons.HiHome className="h-7 w-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: "/",
      },
    ],
  },
  {
    title: "Quick Actions",
    links: [
      {
        name: "View All Reports",
        icon: (
          <Icons2.HiClipboardDocumentList className="h-7 w-7 text-blue-500 group-hover:text-blue-400" />
        ),
        action: "view-reports",
      },
    ],
  },
];
