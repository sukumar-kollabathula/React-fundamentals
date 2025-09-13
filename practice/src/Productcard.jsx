import "./Productcard.css"
function Productcard(product) {

  return (
    <div className="container">
        <p className="title" >Productname:{product.productname}</p>
        <p className="price">Price:{product.price}</p>
        {product.isAvailable ?<p className="stock">"available"</p>:<p className="instock">"not available"</p>}
       
    </div>
  )
}
export default Productcard 