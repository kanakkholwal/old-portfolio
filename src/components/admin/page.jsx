import SideNav from "./sidenav";
import NotificationPanel from "./notification";




export default function AdminPage({ children }) {


    return (<>
        <SideNav />
        {children}
        <NotificationPanel />
    </>)
}