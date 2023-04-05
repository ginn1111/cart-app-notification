import ProductItem from 'components/ProductItem';
import classes from './ProductList.module.scss';
import useProductList from 'hooks/useProductList';

const ProductList = () => {
  const { productList, isError, isLoading, errorMessage, visualizeHandler } =
    useProductList();

  if (isError) {
    return <p>{errorMessage}</p>;
  }

  return (
    <section>
      {!isError && (
        <ul className={classes['product-list']}>
          {productList.map((product, idx) => (
            <ProductItem
              ref={
                idx === productList.length - 1 ? visualizeHandler : undefined
              }
              key={product.id}
              {...product}
            />
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
    </section>
  );
};

export default ProductList;
