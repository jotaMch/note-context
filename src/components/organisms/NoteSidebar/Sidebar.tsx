import { CgNotes, CgPushLeft } from "react-icons/cg";
import { SidebarL } from "./Sidebar.style";
import { IoBookmark } from "react-icons/io5";
import { useState } from "react";
import { CiStickyNote } from "react-icons/ci";

const Sidebar: React.FC = () => {

    return (
        <SidebarL>
            <CiStickyNote size={26} />
            {/* <CgPushLeft size={40} /> */}
            {/* <ul>
                <li><CgNotes /></li>
                <li><IoBookmark /></li>
            </ul> */}
        </SidebarL>
    )
}

export default Sidebar;