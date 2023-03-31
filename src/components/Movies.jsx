import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  async componentDidMount() {
    const response = await fetch("https://www.omdbapi.com/?apikey=6224eac4&s=harry-potter");
    const data = await response.json();
    this.setState({ movies: data.Search });
  }

  render() {
    const { movies } = this.state;
    return (
      <Carousel>
        <Carousel.Item>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h4 className="text-start text-white p-3">Harry Potter</h4>
              <Col>
                {movies.slice(0, 6).map(movie => (
                  <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
                ))}
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Movies;
