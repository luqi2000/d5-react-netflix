import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Component } from "react";

class Movies2 extends Component {
  state = {
    movies2: []
  };

  async componentDidMount() {
    const response = await fetch("https://www.omdbapi.com/?apikey=6224eac4&s=naruto");
    const data = await response.json();
    this.setState({ movies2: data.Search });
  }

  render() {
    const { movies2 } = this.state;
    return (
      <Carousel>
        <Carousel.Item>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h4 className="text-start text-white p-3">Naruto</h4>

              {movies2.slice(0, 6).map(movie => (
                <Col>
                  (
                  <img src={movie.Poster} alt={movie.Title} style={{ width: "200px", height: "250px" }} />)
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
