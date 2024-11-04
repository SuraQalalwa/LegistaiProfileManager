import { RiDashboardHorizontalFill } from "react-icons/ri";
import { RiMenuSearchLine, RiSettingsFill } from "react-icons/ri"; 
import { FaUser, FaCalendarDay, FaBook } from "react-icons/fa"; 

export const menu = [
    {
        label: 'Dashboard',
        icon: <RiDashboardHorizontalFill /> 
    },
    {
        label: 'Drive',
        icon: <FaBook /> 
    },
    {
        label: 'Profile',
        icon: <FaUser /> 
    },
    {
        label: 'Calendar',
        icon: <FaCalendarDay /> 
    },
    {
        label: 'Law Firm Options',
        icon: <FaBook /> 
    },
    {
        label: 'Settings',
        icon: <RiSettingsFill /> 
    },
    // {
    //     label: 'Start New Chat',
    //     url: '/register',
    //     icon: <RiChatFill /> 
    // },
    // {
    //     label: 'Log out',
    //     url: '/register',
    //     icon: <RiLogoutBoxRLine /> 
    // },
];
