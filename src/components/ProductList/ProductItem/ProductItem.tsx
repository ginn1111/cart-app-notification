import { LegacyRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/common/Button';
import Card from 'components/common/Card';

import useAddToCart from 'hooks/useAddToCart';

import './productItem.scss';

type ProductItemProps = {} & Product;

const ProductItem = (
  { id, name, description, price, imageUrl }: ProductItemProps,
  ref: LegacyRef<HTMLDivElement> | ((instance: HTMLDivElement) => void)
) => {
  const { isLoading, addToCartHandler } = useAddToCart(id);

  return (
    <Card>
      <div className="product-item" ref={ref}>
        <Link to={`/product/${id}`} className="product__link">
          <div className="product-item__img">
            <img src={imageUrl} alt={`Product ${name}`} />
          </div>
          <div className="product-item__information">
            <div className="product-item__information__title">
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <p className="product-item__information__description">
              {description}
            </p>
          </div>
        </Link>
        <div className="product-item__information__controls">
          <Button
            disabled={isLoading}
            loading={isLoading}
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default forwardRef(ProductItem);
