import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ezRideLogo from '../public/ezRideLogo.webp';
import {useState} from 'react';

function handleHamburgerClick(mobileBarStatus,updateHam){
  if(mobileBarStatus){
    updateHam(null);
  }
  updateHam(styles.active);
}

export default function NavBar({currentPage}){
  const [mobileBarStatus,updateHam] = useState(null);
  let navBarMobile = (
    <>
      <Link className={styles.navLink+" "+styles.mobileLogo} href="/">
        <Image src={ezRideLogo} className={styles.ezRideLogo} alt="bike logo"/>
        <span className={styles.backupTitle+" "+styles.companyName}>EzRide</span>
      </Link>
      <div className={styles.hamburger + " " + mobileBarStatus}
       onClick={() => handleHamburgerClick(mobileBarStatus,updateHam)}>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </div>
    </>
      );

  return(
  <header className={styles.navContainer}>
    <nav className={styles.nav}>
      <ul className={styles.navMenu + " " + mobileBarStatus}>
        <section className={styles.navLeft}>
          <li className={styles.navListItem}>
            <Link className={styles.navLink +" "+
          (currentPage == '/' ? styles.active : null)} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.navLink +" "+
            (currentPage == '/products' ? styles.active : null) }href="/products">Bikes</Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.navLink +" "+
             (currentPage == '/contact' ? styles.active : null)}
             href="/contact">Contact US</Link>
          </li>
        </section>
        <Link className={styles.navCenter+" "+styles.navLink} href="/">
          <li className={styles.navListItem}>
            <Image src={ezRideLogo} className={styles.ezRideLogo} alt="bike logo"/>
          </li>
          <li className={styles.navListItem+" "+styles.companyName}>EzRide</li>
        </Link>
        <section className={styles.navRight}>
          <li className={styles.navListItem}>
            <Link className={styles.navLink +" "+
            (currentPage == '/art' ? styles.active : null)}
             href="/art">Art</Link>
          </li>
        </section>
      </ul>
      {navBarMobile}
    </nav>
    </header>
      );
      }
