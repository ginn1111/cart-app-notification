import { Link } from 'react-router-dom';

import { addToCart } from 'app/cartSlice';
import { useAppDispatch } from 'app/hooks';
import Button from 'components/common/Button';
import Card from 'components/common/Card';

import classes from './ProductItem.module.scss';

type ProductItemProps = {} & Product;

const ProductItem = ({
  id,
  name,
  description,
  price,
  imageUrl,
}: ProductItemProps) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (e: any) => {
    e.stopPropagation();
    dispatch(addToCart(1, id));
  };

  return (
    <Card>
      <div className={classes.product}>
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
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
