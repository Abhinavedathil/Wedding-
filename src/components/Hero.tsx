import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Import images directly
import media1 from "../assets/Media (1).jpg";
import media7 from "../assets/Media (8).jpg";
import shared2 from "../assets/shared image (10).jpg";

const images = [media1, media7, shared2];

export default function Hero() {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="hero-section">
      {/* Overlay text */}
      <div className="wrapper">
        <h1 className="hero-title">Abhinav & Athira</h1>
        <p className="hero-subtitle">Together with their families</p>
      </div>

      {/* Slick carousel */}
      <Slider {...settings} className="hero-slider">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Wedding slide ${index + 1}`}
              className="hero-slide-img"
              // style={{
              //   width: "100%",
              //   height: "100vh",
              //   objectFit: "cover",
              //   objectPosition: "center",
              // }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
