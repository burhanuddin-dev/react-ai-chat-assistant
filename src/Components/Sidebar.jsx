import { FaFilePen } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LuImages } from "react-icons/lu";
import { BsOpenai } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function SideBar() {

  const [open, setOpen] = useState(false);

  function handleNewChat() {

    window.location.reload();
    
  }

  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-icon-container">
        <BsOpenai
          className="logo"
          onClick={() => {
            setOpen(true);
          }}
        />
        <IoCloseOutline
          className="sidebar-icon cross-icon"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <div className="sidebar-item" onClick={handleNewChat} >
        <FaFilePen className="sidebar-icon" />
        <span>New Chat</span>
      </div>
      <div className="sidebar-item">
        <IoSearchOutline className="sidebar-icon" />
        <span>Search Chats</span>
      </div>
      <div className="sidebar-item">
        <LuImages className="sidebar-icon" />
        <span>Images</span>
      </div>
      <div className="sidebar-item">
        <GoGear className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <IoHelpBuoyOutline className="sidebar-icon" />
        <span>Help</span>
      </div>

      <div className="sidebar-login-container">
        <span>Get responses tailored to you</span>
        <p>
          Log in to get answers based on saved chats, plus create images and
          upload files.
        </p>
        <button>Log in</button>
        <button>sign up for free</button>
      </div>
    </div>
  );
}

export default SideBar;

