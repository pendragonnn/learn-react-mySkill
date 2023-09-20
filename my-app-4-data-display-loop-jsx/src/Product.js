function Product ({ price, name, discount = 0} ) {
  return (
    <div>
      <h2>{name}</h2>
      <p><s>Rp{price}</s> ({discount}%)</p>
      <p>
        <b>Rp {parseInt(price) - parseInt(price * discount / 100)} </b>
      </p>
      <hr/>
    </div>  
  )
}

export default Product;