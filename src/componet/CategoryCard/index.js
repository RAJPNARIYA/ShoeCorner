import categoryMen from '../CategoryCard/men.jpg';
import categoryWomen from '../CategoryCard/women.jpg';

function CategoryCard(props) {
    // var image = props.categoryName
    // var imageName="../CategoryCard/"+image+".jpg"
    // console.log(typeof(imageName));
    // console.log(imageName);
    // console.log(props.name)
 
    
    return (
        <>
       
     
             <div className="col">
                    <div className="card">
                        <img src={props.image} className="card-img-top" alt="Category"  height="500px" />
                        {/* <img src={imageName} className="card-img-top" alt="Category" /> */}

                        <div className="card-body"  style={{textAlign:'center'}}>
                            {/* <h5 className="card-title">{props.categoryName}</h5> */}
                            <h5 className="card-title">{props.name}</h5>
                            <a>Get The Look<i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>

       
        </>
    );
} 

export default CategoryCard;