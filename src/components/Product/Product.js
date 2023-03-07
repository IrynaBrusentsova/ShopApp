
// ===



import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';



const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const imageSrc = `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`;

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={imageSrc} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
            <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <OptionColor colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};


Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.object),
  basePrice: PropTypes.number,
  currentColor: PropTypes.string,
}

export default Product;