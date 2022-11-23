
import b1 from '../images/nike.jpg';
import b2 from '../images/adidas.jpg';
import b3 from '../images/gucci.jpg';
import b4 from '../images/puma.jpg';
import b5 from '../images/reebok.png';
import b6 from '../images/merrell.jpg';

function Brand(props){
    return(
        <>
				<div className="col-sm-2">
					<a href="#"><img src={props.image} alt="Brand Image" height="100px" width="150px" /></a>
				</div>

				
        </>
    )
}

export default Brand;