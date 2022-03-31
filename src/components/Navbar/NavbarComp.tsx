import { signIn, signOut, useSession } from "next-auth/react"

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Sidebar, SidebarCloseButton, SidebarItem } from "./NavBar";

const NavBar = () => {
    const { data: session, status } = useSession();
    const [navBarOpen, setNavBar] = useState(false);

    // if (status === "authenticated") {
    //     return <p>Signed in as {session.user.email}</p>
    // }
    
    // return <a href="/api/auth/signin">Sign in</a>
    
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