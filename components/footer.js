import styles from './footer.module.css'
//Allows for client side rendering of linked pages
import Link from 'next/link'
//Allows for image optimization
import Image from 'next/image'
import twitterLogo from '../public/social-media-logos/twitterLogo.png'
import tiktokLogo from '../public/social-media-logos/tiktokLogo.png'
import facebookLogo from '../public/social-media-logos/facebookLogo.png'
import instagramLogo from '../public/social-media-logos/instaLogo.png'
import ezRideLogo from '../public/ezRideLogo.webp';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <ul>
        <section className={styles.footerLeft}>
          <Link className={styles.footerLink} href="/products"><li className={styles.footerListItem}>Bikes</li></Link>
          <Link className={styles.footerLink} href="/contact"><li className={styles.footerListItem}>Contact</li></Link>
          <Link className={styles.footerLink} href="/art"><li className={styles.footerListItem}>Art</li></Link>
        </section>
        <section className={styles.footerCenter}>
          <a className={styles.footerLink} target="_blank" rel="noreferrer"
           href="https://www.twitter.com">
            <li className={styles.footerListItem}>
              <Image className={styles.socialIcon}
                src={twitterLogo}
                alt="twitter Logo"
              />
            </li>
          </a>
          <a className={styles.footerLink} target="_blank" rel="noreferrer"
           href="https://www.instagram.com">
            <li className={styles.footerListItem}>
              <Image className={styles.socialIcon}
                src={instagramLogo}
                alt="instagram Logo"
              />
            </li>
          </a>
          <a className={styles.footerLink} target="_blank" rel="noreferrer"
          href="https://www.tiktok.com">
            <li className={styles.footerListItem}>
              <Image className={styles.socialIcon}
                src={tiktokLogo}
                alt="tik tok Logo"
              />            </li>
          </a>
          <a className={styles.footerLink} target="_blank" rel="noreferrer"
          href="https://www.facebook.com">
            <li className={styles.footerListItem}>
              <Image className={styles.socialIcon}
                src={facebookLogo}
                alt="facebook Logo"
              />
            </li>
          </a>
        </section>
        <section className={styles.footerRight}>
          <Image className={styles.socialIcon}
            src={ezRideLogo}
            alt="ez Ride Logo , Man riding bicycle with no hands"
          />
        </section>
      </ul>
    </footer>
                      )
                  }
