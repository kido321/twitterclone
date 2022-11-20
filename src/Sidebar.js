import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SidebarOptions from "./SidebarOptions.js";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitterIcon" />
      <SidebarOptions active text="Home" Icon={HomeIcon} />
      <SidebarOptions Icon={SearchOutlined} text="Explor" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Mail" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
