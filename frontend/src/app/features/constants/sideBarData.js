import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdFeedback, MdEmergency } from "react-icons/md";
import { BiBookHeart } from "react-icons/bi";
import { FaUserMd, FaHandsHelping, FaComments } from "react-icons/fa";

import { getCurrentRole } from "../../pages/auth/token";

/* ===============================
   Base items (all authenticated users)
================================= */
const baseSidebarItems = [
  {
    text: "sidebar.home",
    icon: <MdSpaceDashboard />,
    path: "/app",
  },
];

/* ===============================
   Role-based items (M3AK ACTORS)
================================= */
const roleBasedItems = {
  /* -------- USER (person in distress) -------- */
  user: [
    {
      text: "sidebar.resources",
      icon: <BiBookHeart />,
      path: "/app/resources",
    },
    {
      text: "sidebar.psychologists",
      icon: <FaUserMd />,
      path: "/app/psychologists",
    },
    {
      text: "sidebar.chat",
      icon: <FaComments />,
      path: "/app/chat",
    },
    {
      text: "sidebar.emergency",
      icon: <MdEmergency />,
      path: "/app/emergency",
    },
  ],

  /* -------- FRIEND (helper) -------- */
  friend: [
    {
      text: "sidebar.helpSomeone",
      icon: <FaHandsHelping />,
      path: "/app/help",
    },
    {
      text: "sidebar.resources",
      icon: <BiBookHeart />,
      path: "/app/resources",
    },
    {
      text: "sidebar.psychologists",
      icon: <FaUserMd />,
      path: "/app/psychologists",
    },
    {
      text: "sidebar.emergency",
      icon: <MdEmergency />,
      path: "/app/emergency",
    },
  ],

  /* -------- PSYCHOLOGIST -------- */
  psychologist: [
    {
      text: "sidebar.requests",
      icon: <FaHandsHelping />,
      path: "/app/requests",
    },
    {
      text: "sidebar.messages",
      icon: <FaComments />,
      path: "/app/messages",
    },
    {
      text: "sidebar.availability",
      icon: <FaUserMd />,
      path: "/app/availability",
    },
  ],

  /* -------- ADMIN -------- */
  admin: [
    {
      text: "sidebar.users",
      icon: <FaUsers />,
      path: "/app/users",
    },
    {
      text: "sidebar.psychologists",
      icon: <FaUserMd />,
      path: "/app/psychologists/manage",
    },
    {
      text: "sidebar.content",
      icon: <BiBookHeart />,
      path: "/app/content",
    },
    {
      text: "sidebar.feedback",
      icon: <MdFeedback />,
      path: "/app/feedback",
    },
  ],
};

/* ===============================
   Public function used by layout
================================= */
export function getSidebarData() {
  const currentRole = getCurrentRole();

  if (!currentRole) {
    return baseSidebarItems;
  }

  const normalizedRole = currentRole.toLowerCase();
  const roleItems = roleBasedItems[normalizedRole] || [];

  return [...baseSidebarItems, ...roleItems];
}
