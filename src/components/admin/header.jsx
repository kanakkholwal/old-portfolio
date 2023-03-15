import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState, useEffect } from "react";


export const HeaderWrapper = styled.div`
width: 100%;
padding: 0.75rem 0.5rem;
display: flex;
align-items: center;
gap: 0.75rem;
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
&:hover{
    background-color: rgba(0, 0, 0, 0.1);
}
@media (min-width: 1024px) {
    display: none;
}
`;


export default function Header({ }) {
    const [isSidebarLeftOpen, setIsSidebarLeftOpen] = useState(false);
    const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);


    useEffect(() => {
        let sidenavPanel = document.body.querySelector("#sidenav_panel");

        (!sidenavPanel.classList.contains('isOpen')) ?
            sidenavPanel.classList.add('isOpen') :
            sidenavPanel.classList.remove('isOpen');




    }, [isSidebarLeftOpen]);
    useEffect(() => {
        let notificationPanel = document.body.querySelector("#notification_panel");


        (!notificationPanel.classList.contains('isOpen')) ?
            notificationPanel.classList.add('isOpen') :
            notificationPanel.classList.remove('isOpen');



    }, [isSidebarRightOpen]);

    return (
        <HeaderWrapper>
            <Button onClick={() => setIsSidebarLeftOpen((state) => !state)}><RiMenuUnfoldLine /></Button>

            <Button onClick={() => setIsSidebarRightOpen((state) => !state)}><BiBell /></Button>
        </HeaderWrapper>)
}
