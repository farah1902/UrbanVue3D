// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
//import pageOne from "views/Dashboard/pagesSaad";
import NewPage from "views/Dashboard/pageSAad"; // Importer le nouveau composant
import NewPage2 from "views/Dashboard/pageOmar"; // Importer le nouveau composant


import { SiMapbox } from "react-icons/si";
import { SiLeaflet } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsExclamationCircleFill } from "react-icons/bs";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  GlobeIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <MdDashboard color="inherit" />,
    component: Dashboard,
    layout: "/admin",
    protected: true,
  },

  {
    path: "/leaflet", // Ajouter le nouveau chemin
    name: "Leaflet", // Nom de la nouvelle page
    rtlName: "صفحة جديدة2", // Nom RTL de la nouvelle page
    icon: <SiLeaflet color="inherit" />, // Icône pour la nouvelle page
    component: NewPage2, // Composant de la nouvelle page
    layout: "/admin",
    protected: true,
  },

    {
    path: "/mapbox", // Ajouter le nouveau chemin
    name: "Mapbox", // Nom de la nouvelle page
    rtlName: "صفحة جديدة", // Nom RTL de la nouvelle page
    icon: <SiMapbox color="inherit" />, // Icône pour la nouvelle page
    component: NewPage, // Composant de la nouvelle page
    layout: "/admin",
    protected: true,
  },

/*   {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  }, */

  {
    path: "/papers",
    name: "Papers",
    rtlName: "لوحة القيادة",
    icon: <IoNewspaperSharp color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
    protected: true,
  },

  {
    path: "/applications",
    name: "Applications",
    rtlName: "لوحة القيادة",
    icon: <IoSettings color="inherit" />,
    component: Tables,
    layout: "/admin",
    protected: true,
  }, 


  {
    path: "/about-gep",
    name: "About GEP",
    rtlName: "لوحة القيادة",
    icon: <BsExclamationCircleFill color="inherit" />,
    component: Billing,
    layout: "/admin",
    protected: true,
  },

];
export default dashRoutes;