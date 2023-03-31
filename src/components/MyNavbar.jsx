import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NetflixLogo from "../Netflix-assets/assets/netflix_logo.png";
import Avatar from "../Netflix-assets/assets/avatar.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={NetflixLogo} height="40" alt="Netflix logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#TVShows">Tv Shows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#RecAdded">Recently Added</Nav.Link>
              <Nav.Link href="#MyList">My List</Nav.Link>
            </Nav>
            <Nav className="me-3">
              <AiOutlineSearch id="search" />
              <Nav.Link className="nav-link-c">KIDS</Nav.Link>
              <IoIosNotifications id="bells" className="mt-1" />
              <img src={Avatar} height={40} width={40} alt="Avatar" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
