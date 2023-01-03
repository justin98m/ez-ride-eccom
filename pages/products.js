import Image from 'next/image';
import Layout form '../components/layout.js';
import styles from '../styles/products.css'

export default function products
  return(
    <Layout>
      <div className="productContainer">
        <header className="title">
          Bikes & Gear
        </header>
        <div className="product" id="template">
          <p className="productName"></p>
          <img className="productImage" src="" alt=""/>
          <p className="productDescription"></p>
          <div className="priceButtonContainer">
            <p className="productPrice"></p>
            <button className="buyButton" type="button" name="button">Buy</button>
          </div>
        </div>
      </div>
    </Layout>
);
}
