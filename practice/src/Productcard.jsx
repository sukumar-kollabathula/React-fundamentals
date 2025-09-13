function Productcard({product,price,isAvailable}) {

  return (
    <div>
        <p>Product:{product}</p>
        <p>Price:{price}</p>
        <p>isAvailable:{isAvailable===true?"available":"not available"}</p>

    </div>
  )
}
export default Productcard 