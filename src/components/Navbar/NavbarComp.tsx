import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Sidebar, SidebarCloseButton, SidebarItem } from "./NavBar";

const NavBar = () => {
    const [navBarOpen, setNavBar] = useState(false);

    return (
        <>
            <Sidebar style={navBarOpen ? {width: "250px"} : {width: "0"}}>
                <SidebarCloseButton onClick={ () => setNavBar(false) } icon={faXmark} />
                <SidebarItem href="/">Home</SidebarItem>
                <SidebarItem href="/inventory">Inventory</SidebarItem>
                <SidebarItem href="/expenses">Expenses</SidebarItem>
                <SidebarItem href="/settings">Settings</SidebarItem>
            </Sidebar>

            <FontAwesomeIcon onClick={ () => setNavBar(true) } icon={faBars} />
        </>
    );
}

export default NavBar;