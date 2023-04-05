import { Link } from 'react-router-dom';

import Button from 'components/common/Button';
import Card from 'components/common/Card';

import classes from './ProductItem.module.scss';
import useAddToCart from 'hooks/useAddToCart';
import { LegacyRef, forwardRef } from 'react';

type ProductItemProps = {} & Product;

const ProductItem = (
  { id, name, description, price, imageUrl }: ProductItemProps,
  ref: LegacyRef<HTMLDivElement> | ((instance: HTMLDivElement) => void)
) => {
  const { isLoading, addToCartHandler } = useAddToCart(id);

  return (
    <Card>
      <div className={classes.product} ref={ref}>
        <Link to={`/product/${id}`} className={classes.product__link}>
          <div className={classes.product__img}>
            <img src={imageUrl} alt={`Product ${name}`} />
          </div>
          <div className={classes.product__information}>
            <div className={classes.product__information__title}>
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <p className={classes.product__information__description}>
              {description}
            </p>
          </div>
        </Link>
        <div className={classes.product__information__controls}>
          <Button loading={isLoading} onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default forwardRef(ProductItem);
