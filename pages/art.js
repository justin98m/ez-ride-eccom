import styles from '../styles/art.module.css';
import Layout from '../components/layout.js';
import Image from 'next/Image';
import bicycleNun from '/public/artwork/bicycleNun.jpeg';
import boy from '/public/artwork/boy.jpeg';
import kakashi from '/public/artwork/commuterKakashi.jpeg';
import skeletons from '/public/artwork/skeletonBikes.jpeg';
import toadFrog from '/public/artwork/toadFrog.jpeg';
import oldFashioned from '/public/artwork/womens1897bike.jpeg';

let artwork = [bicycleNun,boy,kakashi,skeletons,toadFrog,oldFashioned];

export default function contact(){
  let domArtwork = artwork.map((work,i)=>{
    return (
      <div key = {i} className={styles.artwork}>
        <Image className={styles.artworkImage} src={work} />
      </div>
    );
  });
  return (
    <Layout title="Bike Art" currentPage="/art">
      <div className={styles.artworkContainer}>
        {domArtwork}
      </div>
    </Layout>
  );
}
