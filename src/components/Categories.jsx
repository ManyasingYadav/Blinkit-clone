import './categories.css'

function Categories() {
  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <div className="category-list">

        <div className="category">
          <div className="category-icon">🥛</div>
          <p>Milk</p>
        </div>

        <div className="category">
          <div className="category-icon">🍎</div>
          <p>Fruits</p>
        </div>

        <div className="category">
          <div className="category-icon">🥦</div>
          <p>Vegetables</p>
        </div>

        <div className="category">
          <div className="category-icon">🍞</div>
          <p>Bakery</p>
        </div>

        <div className="category">
          <div className="category-icon">🍪</div>
          <p>Snacks</p>
        </div>

        <div className="category">
          <div className="category-icon">🥤</div>
          <p>Drinks</p>
        </div>

      </div>

    </section>
  )
}

export default Categories