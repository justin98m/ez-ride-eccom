import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ezRideLogo from '../public/nohandsgif.gif';

export function NavBarMobile(){
    return (
      <nav className="nav">
        <Link className={styles.navLink+" "+styles.mobileLogo} href="/">
          <Image src={ezRideLogo} className={styles.ezRideLogo} alt="bike logo"/>
          <span className={styles.backupTitle+" "+styles.companyName}>EzRide</span>
        </Link>
        <div className={styles.hamburger}>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </div>
      </nav>
        );

}
export default function NavBar(){
  return (
    <nav className="nav">
      <ul className={styles.navMenu}>
        <section className={styles.navLeft}>
          <li className={styles.navListItem}>
            <Link className={styles.navLink +" "+ styles.active} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.navLink} href="/products">Bikes</Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.navLink} href="/contact">Contact US</Link>
          </li>
        </section>
        <Link className={styles.navCenter+" "+styles.navLink} href="/">
          <li className={styles.navListItem}>
            <Image className={styles.ezRideLogo} alt="bike logo"/>
          </li>
          <li className={styles.navListItem+" "+styles.companyName}>EzRide</li>
        </Link>
        <section className={styles.navRight}>
          <li className={styles.navListItem}>
            <Link className={styles.navLink} href="/art">Art</Link>
          </li>
        </section>
      </ul>
    </nav>
      );
      }
