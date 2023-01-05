import Image from 'next/image';
import Layout from '../components/layout.js';
import styles from '../styles/products.module.css'
import dbQuery from '../components/mysql-connect.js'
let product =   (
  <div className="product" id="template">
    <p className="productName"></p>
    <Image className="productImage" src="" alt=""/>
    <p className="productDescription"></p>
    <div className="priceButtonContainer">
      <p className="productPrice"></p>
      <button className="buyButton" type="button" name="button">Buy</button>
    </div>
  </div>
    );
export async function getStaticProps(){
  const data = await dbQuery("select name from products");
  return {
    props : {
      products: data.result,
    }
  }
}

function ListProducts(props){
  return props.products.map(product => {
    return (
      <h1>{product.name}</h1>
    );
  })
}



export  default function Products({products}){
      // products = products.map(field =>{
      //   return Object.fromEntries(field);
      // })
      return(
        <Layout>
          <div className="productContainer">
            <ListProducts products={products}/>
          </div>
        </Layout>
      );
    }
