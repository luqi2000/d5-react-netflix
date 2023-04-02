import { Container, Row, Col, Carousel, Spinner, Alert } from "react-bootstrap";
import { Component } from "react";

class Movies2 extends Component {
  state = {
    movies2: [],
    isLoading: false,
    errMsg: ""
  };

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=6224eac4&s=naruto");
      if (response.ok) {
        const data = await response.json();
        this.setState({ movies2: data.Search, isLoading: false, errMsg: "" });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
      this.setState({
        isLoading: false,
        errMsg: e.message
      });
    }
  }

  render() {
    const { movies2 } = this.state;
    return (
      <Carousel>
        <Carousel.Item>
          <Container fluid>
            <h4 className="text-start text-white p-3">Naruto</h4>
            {this.state.isLoading && !this.state.error && (
              <Spinner animation="grow" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            <Row>
              {this.state.errMsg && <Alert variant="warning">Cannot load the data: {this.state.errMsg}</Alert>}
              {movies2.slice(0, 6).map(movie => (
                <Col key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} style={{ width: "200px", height: "250px" }} />
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Movies2;
