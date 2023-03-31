import { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

class MyFooter extends Component {
  render() {
    return (
      <footer className="mt-5">
        <div className="container w-50">
          <Row>
            <div className="d-flex">
              <div className="d-flex mb-3">
                <BsFacebook className="me-3 text-secondary" />
                <BsInstagram className="me-3 text-secondary" />
                <BsTwitter className="me-3 text-secondary" />
                <AiOutlineYoutube className="text-secondary" />
              </div>
            </div>
            <Col sm={3}>
              <div className="text-secondary text-start">
                <p className="fs-6">Audio and Subtitles</p>
                <p className="fs-6">Media Center</p>
                <p className="fs-6">Privacy</p>
                <p className="fs-6">Contacs us</p>
                <button className="border border-secondary py-1 text-secondary bg-transparent mt-4 mb-3">
                  Service Code
                </button>
              </div>
            </Col>
            <Col sm={3}>
              <div className="text-secondary text-start">
                <p className="fs-6">Audio Description</p>
                <p className="fs-6">Investor Relations</p>
                <p className="fs-6">Legal Notices</p>
              </div>
            </Col>
            <Col sm={3}>
              <div className="text-secondary text-start">
                <p className="fs-6">Help Center</p>
                <p className="fs-6">Jobs</p>
                <p className="fs-6">Cookie Preferences</p>
              </div>
            </Col>
            <Col sm={3}>
              <div className="text-secondary text-start">
                <p className="fs-6">Gift Cards</p>
                <p className="fs-6">Terms of Use</p>
                <p className="fs-6">Corporate Information</p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}
export default MyFooter;
