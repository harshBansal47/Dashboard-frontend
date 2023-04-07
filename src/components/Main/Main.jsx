import "./Main.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { p1, p2, p3, p4, p5 } from "../../Assets";
const Main = () => {
  const now = 75;
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="main-top">
          <div className="sym">
            <span>$</span>
          </div>
          <div className="rev">
            <div className="rev-detail">
              <span className="rev-text">Total Revenue</span>
              <p className="rev-num">$92,983</p>
            </div>
            <div className="bar">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
          </div>
        </div>

        <div className="main-center">
          <div className="main-center-left">
            <div className="main-center-left-wrapper">
              <span className="rev-text">Travel</span>
              <p className="app-text">Mobile application</p>
              <p className="status">Seen by</p>
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={p1} />
                <Avatar alt="Travis Howard" src={p2} />
                <Avatar alt="Cindy Baker" src={p3} />
                <Avatar alt="Agnes Walker" src={p4} />
                <Avatar alt="Trevor Henderson" src={p5} />
              </AvatarGroup>
              <div className="button-box">
                <button className="center-button active">Tour</button>
                <button className="center-button ">Trip</button>
                <button className="center-button ">Transport</button>
              </div>
            </div>
          </div>
          <div className="main-center-right">
            <div className="main-center-right-wrapper">
              <span className="rev-text">Hotel</span>
              <p className="app-text">DashBoard</p>
              <p className="status">Seen by</p>
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={p1} />
                <Avatar alt="Travis Howard" src={p2} />
                <Avatar alt="Cindy Baker" src={p3} />
                <Avatar alt="Agnes Walker" src={p4} />
                <Avatar alt="Trevor Henderson" src={p5} />
              </AvatarGroup>
              <div className="button-box">
                <button className="center-button active">Tour</button>
                <button className="center-button ">Trip</button>
                <button className="center-button ">Transport</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <div className="slots">
            <span className="rev-text">Free Slots Available</span>
            <Switch defaultChecked size="small" />
          </div>
          <div className="slots-details">
            <button className="b-active">
              <span className="date">15</span>
              <p className="month">June</p>
            </button>
            <button>
              <span className="date">12</span>
              <p className="month">June</p>
            </button>
            <button>
              <span className="date">18</span>
              <p className="month">June</p>
            </button>
            <button>
              <span className="date">20</span>
              <p className="month">July</p>
            </button>
            <button>
              <span className="date">2</span>
              <p className="month">July</p>
            </button>
            <button>
              <span className="date">10</span>
              <p className="month">July</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;