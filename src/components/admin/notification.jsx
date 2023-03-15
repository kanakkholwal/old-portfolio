import styled from "styled-components"
import useSWR from 'swr'
import { Loader } from "components/Loader";
import { GrClose } from "react-icons/gr";
import { useRef } from "react";

const NotificationPanelWrapper = styled.div`
position: fixed;
inset-block: 0;
right:0;
width: 16rem;
height: 100%;
background-color: #fff;
border-left: 1px solid rgba(0, 0, 0, 0.1);
padding: 1.25rem;
font-weight: 500;
font-size: 1.2rem;
transition: all 0.3s ease-in-out;
transform: translateX(100%);
&.isOpen{
    transform: translateX(0);
}



`;
const CloseButton = styled.button`
position: absolute;
right: 5px;
top: 5px;
cursor: pointer;
border-radius: 50%;
height: 2.5rem;
width: 2.5rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: transparent;
transition: all 0.3s ease-in-out;
&:hover{
    background-color: rgba(0, 0, 0, 0.1);
}
@media (min-width: 1024px) {
    display: none;
}
`;

const SectionTitle = styled.h4`
color: rgba(0, 0, 0, 0.7);
padding: 0.5rem 0;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NotificationPanel() {

    const { data, error, isLoading } = useSWR("/api/notifications", fetcher)

    const notificationPanelRef = useRef(null);



    return (
        <NotificationPanelWrapper id="notification_panel" ref={notificationPanelRef}>
            <CloseButton onClick={() => notificationPanelRef.current.classList.toggle('isOpen')}><GrClose /></CloseButton>
            <SectionTitle>Notifications</SectionTitle>
            {error && <p>Failed to load notifications</p>}
            {isLoading && <Loader size="28px" />}
            {data?.message && <p>{data?.message}</p>}
            {data?.notifications?.length > 0 && <p>Showing {data?.notifications?.length} notifications</p>}
            {data?.notifications?.length === 0 && <p>No notifications</p>}
            {data?.notifications?.map((item, index) => (<li key={index}>{item.message}</li>))}
        </NotificationPanelWrapper>
    )
}