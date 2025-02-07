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

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/new-page", // Ajouter le nouveau chemin
    name: "New Page", // Nom de la nouvelle page
    rtlName: "صفحة جديدة", // Nom RTL de la nouvelle page
    icon: <RocketIcon color="inherit" />, // Icône pour la nouvelle page
    component: NewPage, // Composant de la nouvelle page
    layout: "/admin",
    protected: true,
  },
  {
    path: "/new-page2", // Ajouter le nouveau chemin
    name: "New Page2", // Nom de la nouvelle page
    rtlName: "صفحة جديدة2", // Nom RTL de la nouvelle page
    icon: <RocketIcon color="inherit" />, // Icône pour la nouvelle page
    component: NewPage2, // Composant de la nouvelle page
    layout: "/admin",
    protected: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
    protected: true,
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
    protected: true,
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
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
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
        protected: true,
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;