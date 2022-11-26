import { Link } from "react-router-dom";
import product from "../images/sport-2.jpg";

function ProductCard(props) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="ProductImg"
            height="300px"
          />

          <div className="card-body text-center">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text">{props.price}</p>
            <br />
            <button className="btn bg-info" to="productdetails">
              View Details
            </button>
            <br />
            <button className="btn bg-warning m-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
