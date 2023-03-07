

// =====
import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';


const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => (
        <Product key={product.name} {...product} />
      ))}
    </section>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ),
};

export default Products;