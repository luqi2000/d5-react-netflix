import { Component } from "react";
import { Dropdown } from "react-bootstrap";

import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between mt-5 pt-5">
        <div className="d-flex ms-3">
          <h2>TV Shows</h2>
          <Dropdown className="ms-4">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Drammatic</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Horror</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="me-4">
          <AiOutlineAlignLeft className="icon me-2" />
          <BiDotsHorizontalRounded className="icon" />
        </div>
      </div>
    );
  }
}

export default Header;
