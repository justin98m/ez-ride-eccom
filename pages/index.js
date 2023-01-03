import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout.js'
//will export later
import bikesUp from  '../public/bikesUpHero.jpg';
import nyBikeRace from '../public/nyBikeRaceHero.jpeg';
import trailBike from '../public/hero1.jpeg'
import {useState} from 'react'
let slideImg  = [
  bikesUp,
  nyBikeRace
  ,trailBike
];

function increaseIndex(index){
  if(index == 2){
    return 0
  } else {
    return index + 1
  }
}
function decreaseIndex(index){
  if(index == 0){
    return 2
  } else {
    return index - 1
  }
}

export default function Home() {
  const [index,setIndex] = useState(0);

  return (

    <Layout title="EZ Ride Home">
      <div className="slideshow">
        <button type="button" onClick={()=> setIndex(decreaseIndex(index))} className={styles.arrow + " " +  styles.left}>←</button>
        <Image className={styles.currentImg} src={slideImg[index]} alt=""/>
        <button type="button" onClick={()=> setIndex(increaseIndex(index))} className={styles.arrow +" "+ styles.right}>→</button>
      </div>
    </Layout>
  );
}
