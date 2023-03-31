import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Component } from "react";

class Movies3 extends Component {
  state = {
    movies3: []
  };

  async componentDidMount() {
    const response = await fetch("https://www.omdbapi.com/?apikey=6224eac4&s=star");
    const data = await response.json();
    this.setState({ movies3: data.Search });
  }

  render() {
    const { movies3 } = this.state;
    return (
      <Carousel>
        <Carousel.Item>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h4 className="text-start text-white p-3">Star Wars</h4>

              {movies3.slice(0, 6).map(movie => (
                <Col>
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

export default Movies3;
