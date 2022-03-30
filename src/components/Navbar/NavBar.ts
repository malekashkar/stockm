import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Sidebar = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
`;

export const SidebarItem = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
        color: #f1f1f1;
    }
`;

export const SidebarCloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: white;
`;