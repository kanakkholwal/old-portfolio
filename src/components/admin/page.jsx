import { MainWrapper } from "./wrapper";
import SideNav from "./sidenav";
import NotificationPanel from "./notification";
import Header from "./header";





export default function AdminPage({ children }) {


  return (
    <>
      <SideNav />
      <MainWrapper id="main_wrapper">
        <Header />
        {children}
      </MainWrapper>
      <NotificationPanel />
    </>)
}