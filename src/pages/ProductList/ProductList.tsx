import ProductItem from 'components/ProductList/ProductItem';
import useProductList from 'pages/ProductList/hooks/useProductList';

import './productList.scss';
import { useRef } from 'react';

const ProductList = () => {
  const rootRef = useRef<HTMLUListElement>(null);

  const { productList, isError, isLoading, errorMessage, visualizeHandler } =
    useProductList(rootRef);

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
