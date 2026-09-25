import ProductCard from './ProductCard'
import product from '../dummy-data/product'
import './Product.css'

function Product() {
  return (
    <section className="products">

      <h2>Popular Products</h2>

      <div className="product-list">

        {product.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            image={item.image}
          />
        ))}

      </div>

    </section>
  )
}

export default Product