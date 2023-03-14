import styled from "styled-components"
import useSWR from 'swr'
import { Loader } from "components/Loader";

const NotificationPanelWrapper = styled.div`
position: fixed;
inset-block: 0;
right:0;
width: 16rem;
height: 100%;
background-color: #fff;
box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
border-left: 1px solid rgba(0, 0, 0, 0.1);
padding: 1.25rem;
font-weight: 400;
font-size: 0.875rem;
`;
const SectionTitle = styled.h4`
color: rgba(0, 0, 0, 0.7);
padding: 0.5rem 0;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NotificationPanel() {

    const { data, error, isLoading } = useSWR("/api/notifications", fetcher)




    return (
        <NotificationPanelWrapper>
            <SectionTitle>Notifications</SectionTitle>
            {error && <p>Failed to load notifications</p>}
            {isLoading && <Loader />}
            {data?.message && <p>{data?.message}</p>}
            {data?.notifications?.length > 0 && <p>Showing {data?.notifications?.length} notifications</p>}
            {data?.notifications?.length === 0 && <p>No notifications</p>}
            {data?.notifications?.map((item, index) => (<li key={index}>{item.message}</li>))}
        </NotificationPanelWrapper>
    )
}