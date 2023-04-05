import ProductItem from 'components/ProductList/ProductItem/ProductItem';
import useProductList from 'pages/ProductList/hooks/useProductList';

import './productList.scss';

const ProductList = () => {
  const { productList, isError, isLoading, errorMessage, visualizeHandler } =
    useProductList();

  if (isError) {
    return <p>{errorMessage}</p>;
  }

  return (
    <section>
      {!isError && (
        <ul className="product-list">
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
