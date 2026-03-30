import { borders, card } from "../styles/global";
import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className={card.cardWrapper}>
      {/* Image */}
      <div className={card.imageWrapper}>
        <img src={product.image} alt={product.name} className={card.image} />
      </div>

      {/* Content */}
      <section className={card.content}>
        <h3 className={card.title}>{product.name}</h3>

        <p className={card.description}>{product.description}</p>

        <div className={card.priceRatingContainer}>
          <span className={card.price}>
            {product.price} {product.currency}
          </span>

          <span className={card.rating}>⭐ {product.rating}</span>
        </div>

        <div className={card.stockCategoryContainer}>
          <span
            className={`font-medium ${
              product.inStock ? card.stock.inStock : card.stock.outOfStock
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          <span className={card.category}>{product.category}</span>
        </div>

        <div className="flex justify-between">
          <Button variant="addToCart" size="xs" rounded="sm" shadow="sm">
            Add to Cart
          </Button>
          <Button variant="removeFromCart" size="xs" rounded="sm" shadow="sm">
            Remove
          </Button>
          <Button variant="viewDetails" size="xs" rounded="sm" shadow="sm">
            View More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
