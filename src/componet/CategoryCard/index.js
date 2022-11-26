import categoryMen from "../CategoryCard/men.jpg";
import categoryWomen from "../CategoryCard/women.jpg";

function CategoryCard(props) {
  // var image = props.categoryName
  // var imageName="../CategoryCard/"+image+".jpg"
  // console.log(typeof(imageName));
  // console.log(imageName);
  // console.log(props.name)

  return (
    <>
      <div className="col">
        <div class="card bg-dark text-white">
          <img src={props.image} class="card-img cat-img" alt="Category" />
          <div class="card-img-overlay text-box-center">
            <h3 class="card-title">{props.name}</h3>
            <h5 class="card-text">Get The Look </h5>
          </div>
        </div>
      </div>

      {/* <div className="col">
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="Category"
            height="500px"
          />
           <img src={imageName} className="card-img-top" alt="Category" /> 

          <div className="card-body text-center">
            {/* <h5 className="card-title">{props.categoryName}</h5> */}
      {/* <h5 className="card-title">{props.name}</h5>
            <a>
              Get The Look<i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CategoryCard;
