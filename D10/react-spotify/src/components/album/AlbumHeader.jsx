import React, { Component } from "react";
import "../../styles/albums.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AlbumHeader extends Component {
  render() {
    return (
      <div className="album-header" id="header">
        <div className="arrow-container">
          <AiOutlineLeft className="arrow" />
          <AiOutlineRight className="arrow" />
        </div>

        <div className="header-btns">
          <a href="#">
            <button
              className="upgrade-btn"
              value="upgrade"
              style={{ marginRight: "20px" }}
            >
              UPGRADE
            </button>
          </a>

          <Nav style={{ marginTop: "-0.5em"}}>
            <NavDropdown
              eventKey={1}
              title={
                <button
                  class="profile-btn dropdown-toggle dropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="user-icon">
                    <AiOutlineUser style={{ fontSize: "1.5em" }} />
                  </span>
                  Drita
                  <BsChevronDown className='ml-1 mr-1'/>
                </button>
              }
            >
              <NavDropdown.Item
                eventKey={1.1}
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                User
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={1.3}
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Account
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={1.3}
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </div>
    );
  }
}

export default AlbumHeader;
