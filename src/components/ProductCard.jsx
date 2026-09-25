import './ProductCard.css'

function ProductCard({ name, quantity, price, image }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>

      <p>{quantity}</p>

      <div className="product-bottom">
        <span>₹{price}</span>

        <button>Add</button>
      </div>

    </div>
  )
}

export default ProductCard