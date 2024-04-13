import { Component } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoNavigateCircle } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { CiSquareChevDown } from "react-icons/ci";
import "./index.css";

class SideNavbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="nav-bar">
          <div className="nav-create">
            <div className="nav-head">
              <h1 className="nav-heading">character.ai</h1>
              <MdKeyboardDoubleArrowLeft className="nav-button-1" />
            </div>
            <div className="nav-create">
              <button className="nav-create-button">
                <FaPlus /> Create
              </button>
            </div>
            <div className="nav-discover">
              <button className="nav-discover-button">
                <IoNavigateCircle /> Discover
              </button>
            </div>
          </div>
          <div className="nav-chats-container">
            <div className="nav-chats-head">
              <h3>chats</h3>
            </div>
            <div className="nav-chats">
              <p className="nav-chat-head">Today</p>
              <div className="nav-chats-user-1">
                <button className="nav-chat-button"> s </button>
                <p className="nav-chat-content">
                  {" "}
                  siva <BsThreeDots />
                </p>
              </div>
              <div className="nav-chats-user-1">
                <button className="nav-chat-button"> v </button>
                <p className="nav-chat-content">
                  {" "}
                  vaishnavi <BsThreeDots />
                </p>
              </div>
            </div>
            <div className="nav-footer">
              <hr className="break" />
              <button className="try-button">
                Try c.ai <HiMiniPlusSmall />{" "}
              </button>
              <div className="nav-chats-user-profile">
                <button className="nav-chat-button"> s </button>
                <p>
                  {" "}
                  siva@123 <CiSquareChevDown />
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideNavbar;
