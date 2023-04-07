import "./Sidebar.css";
import { VscFileSubmodule } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-top">
          <div className="sidebar-top-wrapper">
            <span className="name">Hira R.</span>
            <p className="post">UI /UX designer</p>
            <div className="sidebar-top-section">
              <div className="item">
                <span className="count">125</span>
                <p className="text">Projects</p>
              </div>
              <div className="item">
                <span className="count">$124</span>
                <p className="text">Revenue</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-center">
          <ul>
            <li>
              <div className="icon active">
                <VscFileSubmodule />
              </div>
              <span className="text">Dashboard</span>
            </li>
            <li>
              <div className="icon">
                <AiOutlineMail />
              </div>

              <span className="text">Email</span>
            </li>
            <li>
              <div className="icon">
                <AiOutlineCalendar />
              </div>
              <span className="text">Calendar</span>
            </li>
            <li>
              <div className="icon">
                <BsBarChart />
              </div>
              <span className="text">Graph</span>
            </li>
            <li>
              <div className="icon">
                <FaWpforms />
              </div>
              <span className="text">Forms</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-bottom-wrapper">
            <span className="pro-text">Go Pro</span>
            <p className="text" style={{ margin: "15px 0px" }}>
              Upgrade your plan to get pro benefits
            </p>
            <div className="pro-button">
              <button>Let's Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;