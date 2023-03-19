import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState, useEffect } from "react";


export const HeaderWrapper = styled.div`
width: 100%;
padding: 0.75rem 1.5rem;
display: flex;
align-items: center;
gap: 0.75rem;
background:#fbfbfb;
`;
const Button = styled.button`
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
margin-inline:${({ center }) => (center ? "auto" : "0.1rem")};
margin-inline-start:${({ end }) => (end ? "auto" : "0.1rem")};
margin-inline-end:${({ start }) => (start ? "auto" : "0.1rem")};
&:hover{
    background-color: rgba(0, 0, 0, 0.1);
}
// @media (min-width: 1024px) {
//     display: none;
// }
`;


export default function Header({ }) {
    const [isSidebarLeftOpen, setIsSidebarLeftOpen] = useState(false);
    const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);


    useEffect(() => {
        let sidenavPanel = document.body.querySelector("#sidenav_panel");
        let MainPanel = document.body.querySelector("#main_wrapper");

        if (!sidenavPanel.classList.contains('isOpen')) {
            sidenavPanel.classList.add('isOpen');
            MainPanel.classList.add('isSidenavOpen')
        }
        else {
            sidenavPanel.classList.remove('isOpen');
            MainPanel.classList.remove('isSidenavOpen')
        }


    }, [isSidebarLeftOpen]);

    // useEffect(() => {
    //     let notificationPanel = document.body.querySelector("#notification_panel");
    //     let MainPanel = document.body.querySelector("#main_wrapper");



    //     if (!notificationPanel.classList.contains('isOpen')) {
    //         notificationPanel.classList.add('isOpen');
    //         MainPanel.classList.add('isNotificationOpen')
    //     }
    //     else {
    //         notificationPanel.classList.remove('isOpen');
    //         MainPanel.classList.remove('isNotificationOpen')
    //     }


    // }, [isSidebarRightOpen]);

    useEffect(() => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            document.body.querySelector("#sidenav_panel").classList.add('isOpen');
            // document.body.querySelector("#notification_panel").classList.add('isOpen');
            document.body.querySelector("#main_wrapper").classList.add('isNotificationOpen');
            document.body.querySelector("#main_wrapper").classList.add('isSidenavOpen');
        }
        else {
            document.body.querySelector("#sidenav_panel").classList.remove('isOpen');
            // document.body.querySelector("#notification_panel").classList.add('isOpen');
            document.body.querySelector("#main_wrapper").classList.remove('isNotificationOpen');
            document.body.querySelector("#main_wrapper").classList.remove('isSidenavOpen');
        }

    }, [])
    return (
        <HeaderWrapper>
            <Button onClick={() => setIsSidebarLeftOpen((state) => !state)}><RiMenuUnfoldLine /></Button>

            <Button onClick={() => setIsSidebarRightOpen((state) => !state)} end={"true"}><BiBell /></Button>
        </HeaderWrapper>)
}
