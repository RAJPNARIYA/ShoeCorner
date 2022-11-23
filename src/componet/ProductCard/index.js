import product from '../images/sport-2.jpg';

function ProductCard(props) {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt="ProductImg" height="300px" />
                        <div className="card-body" style={{textAlign:'center'}}>
                            <h3 className="card-title">{props.name}</h3>
                            <p className="card-text">{props.price}</p><br/>
                            <button className='btn bg-info'>View Details</button>
                        </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard;