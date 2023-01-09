import Image from 'next/image';
import Layout from '../components/layout.js';
import styles from '../styles/products.module.css'
import dbQuery from '../components/mysql-connect.js'
import {useReducer} from 'react';
import productHelper from '../components/productHelper.js';
import FilterUI from '../components/filterUI.js';

export async function getStaticProps(){
  const data = await dbQuery("select * from products");
  return {
    props : {
      productList : data.result
    }
  }
}

function ListProducts(props){
  return props.products.map(product => {
    return (
      <div key={product.productId} className={styles.product}>
        <p className={styles.productName}>{product.name}</p>
        <img className={styles.productImage} src={product.imgPath} alt={product.alt}/>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceButtonContainer}>
          <p className={styles.productPrice}>${product.price}</p>
          <button className={styles.buyButton} type="button" name="button">Buy</button>
        </div>
      </div>
    );
  })
}

export  default function Products({productList}){
      //map creates shallow copy of product list
      //works
      let productListCopy =  productList.map(prod => prod);
      productHelper.sortByPrice(false,productListCopy);

      let initialFilter = {
      //create shallow copy of product list and sort here
        productList : productListCopy,
        isAscending : false,
        bikes: true,
        accessories: true,
        //Product List is meant to be referenced and copied from only.
        productListReference :  Object.freeze(productList)

      }
      const[productFilter,dispatch] = useReducer(productHelper.productReducer, initialFilter);
      //console.log(`Coming from Product Component ${JSON.stringify(productFilter)}`);
      return(
        <Layout>
          <header className={styles.title}>Bikes & Gear</header>
          <FilterUI filterState={productFilter} dispatch={dispatch}/>
          <main className={styles.productContainer}>
            <ListProducts products={productFilter.productList}/>
          </main>
        </Layout>
      );
    }
