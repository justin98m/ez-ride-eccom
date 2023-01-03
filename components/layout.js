import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer.js';
import NavBar, {NavBarMobile} from './navbar.js'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* <link rel="icon" type="image/x-icon" href="media/faveicon.ico"> */}
        <title>{title}</title>
      </Head>
      <NavBar></NavBar>
      {/* Children represents the called page component */}
      <main>{children}</main>
      <Footer></Footer>
    </>

  );
}
