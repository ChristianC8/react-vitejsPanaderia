import Carousel from 'react-bootstrap/Carousel';
import './styles/Carrousel.css'


function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100  carouselH"
          src="https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/99a0bf69e7a691ab0a199625da7f9e35.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselH"
          src="https://i.pinimg.com/originals/9e/9b/ce/9e9bcecf943d3a4f232667d093a14bf0.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselH"
          src="https://truffle-assets.imgix.net/01ef918a-layercake_1920x1080.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;