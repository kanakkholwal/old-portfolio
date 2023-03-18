import { MainWrapper, ContentWrapper } from "./wrapper";
import SideNav from "./sidenav";
import NotificationPanel from "./notification";
import Header from "./header";

// icons
import { RxDashboard as DashboardIcon } from 'react-icons/rx';
import { FiUser as UserIcon } from 'react-icons/fi';
import { TbSitemap as ProjectIcon } from 'react-icons/tb';
import { MdOutlineWorkOutline as WorkIcon } from 'react-icons/md';
import { MdCastForEducation as EducationIcon } from 'react-icons/md';



const links = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: <UserIcon />,
  },
  {
    title: "Projects",
    path: "/admin/projects",
    icon: <ProjectIcon />,
  },
  {
    title: "Work",
    path: "/admin/works",
    icon: <WorkIcon />,
  },
  {
    title: "Education",
    path: "/admin/education",
    icon: <EducationIcon />,
  }

]



export default function AdminPage({ children }) {


  return (
    <>
      <SideNav links={links} />
      <MainWrapper id="main_wrapper">
        <Header />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainWrapper>
      <NotificationPanel />
    </>)
}