import slider1 from "../Slider/slider-1.jpg";
import slider2 from "../Slider/slider-2.jpg";
import slider3 from "../Slider/slider-3.jpg";
import line from "../Slider/s-border.png";

function Slider() {
  return (
    <div className="container-fulid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100 slider-height"
              alt="slider"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                Hot Trends of This Year
                <br />
                <img src={line} alt="Image 1" />
                <br />
                <span className="btn bg-info">Shop Now</span>
              </h1>
              <h3>Big sale on sandals</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100 slider-height"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                New stylish shoes for men and women
                <br />
                <img src={line} alt="Image 1" />
                <br />
                <span className="btn bg-info">Shop Now</span>
              </h1>
              <h3>Hot Trends of This Year</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100 slider-height"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                New stylish shoes for men
                <br />
                <img src={line} alt="Image 1" />
                <br />
                <span className="btn bg-info">Shop Now</span>
              </h1>
              <h3>Hot Trends of This Year</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
