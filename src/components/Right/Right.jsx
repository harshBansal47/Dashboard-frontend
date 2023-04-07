import "./Right.css";
import { AiOutlineDown } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { p1, p2, p3, p4, p5 } from "../../Assets/index";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
const Right = () => {
  const percentage = 75;
  const now = 60;

  return (
    <div className="right">
      <div className="right-wrapper">
        <div className="right-top">
          <div className="right-top-wrapper">
            <div className="svg-blob">
              <svg
                id="10015.io"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height={"100px"}
              >
                <path
                  fill="#ff4780"
                  d="M328.5,263.5Q345,287,329,304Q313,321,286.5,311.5Q260,302,239.5,370.5Q219,439,191.5,405.5Q164,372,181,321.5Q198,271,171.5,265.5Q145,260,113,233Q81,206,89.5,171.5Q98,137,130.5,122Q163,107,198.5,144.5Q234,182,259,143.5Q284,105,305.5,124Q327,143,376,150.5Q425,158,368.5,199Q312,240,328.5,263.5Z"
                />
              </svg>
            </div>
            <div className="right-top-right">
              <div className="client-text">
                <span className="client">Dear Client</span>
                <p
                  className="text"
                  style={{ margin: "10px 0px", lineHeight: "20px" }}
                >
                  Join our online community. It helps in managing your products
                </p>
              </div>
              <div className="dropdown">
                <AiOutlineDown />
              </div>
            </div>
          </div>
        </div>

        <div className="right-center">
          <div className="right-center-wrapper">
            <div className="profile">
              <div className="profile-left">
                <span className="transaction-text">Transaction Detail</span>
                <p className="text" style={{ marginTop: "5px" }}>
                  Hi Hira,
                </p>
              </div>
              <img className="profile-picture" src={p1} />
            </div>
            <div className="balance">
              <div className="balance-left">
                <span className="transaction-text">$4763.40</span>
                <p className="text" style={{ marginTop: "5px" }}>
                  Available Balance
                </p>
              </div>
              <div className="balance-right">
                <p className="text">....3884</p>
              </div>
            </div>
            <div className="profiles">
              <img className="profile-picture" src={p1} />
              <img className="profile-picture" src={p2} />
              <img className="profile-picture" src={p3} />
              <img className="profile-picture" src={p4} />
              <img className="profile-picture" src={p5} />
            </div>
            <div className="send">
              <button>Send</button>
            </div>
          </div>
        </div>

        <div className="right-bottom">
          <div className="right-bottom-right">
            <div className="right-bottom-right-wrapper">
              <div className="project-details">
                <span className="count">Project Details</span>
                <FiMoreVertical />
              </div>
              <div className="client-info">
                <span className="name">Hira R.</span>
                <p className="post">UI /UX designer</p>
              </div>
              <div className="progressbar">
                <span
                  className="progress-title"
                  style={{ marginBottom: "15px" }}
                >
                  Project Progress
                </span>
                <div className="bar">
                  <ProgressBar now={now} label={`${now}%`} />
                </div>
              </div>
            </div>
          </div>
          <div className="right-bottom-left">
            <div className="right-bottom-left-wrapper">
              <div className="project-details">
                <span className="progress-title">Project Progress</span>
                <FiMoreVertical />
              </div>
              <div className="circulur-progress-bar">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  background
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "blue",
                    trailColor: "transparent",
                    backgroundColor: "rgb(190, 38, 79)",
                    trailColor: "transparent",
                  })}
                />
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                3 remaining projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;