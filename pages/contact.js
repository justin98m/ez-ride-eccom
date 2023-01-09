import styles from '../styles/Contact.module.css';
import Layout from '../components/layout.js';
import faqList from '../public/faq.json';
import {setState} from 'react'

export default function Contact(){
  return (
    <Layout title="Contact Us" currentPage='/contact'>
      <main className={styles.contactContainer}>
      <FAQ/>
        <form className={styles.contactForm} action="contact">
          <label for="fName">First Name</label>
          <input type="text" name="fName"placeholder="Name" required/>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="example@email.com" required/>
          <label for="message">Message</label>
          <textarea required className={styles.message} name="message" rows="10" cols="50" >
          </textarea>
          <input type="submit" name="submit" value="submit" className={styles.submit}/>
        </form>
      </main>
    </Layout>
  );
      }

function handleFaqClick(e){
  console.log('hey');
}
function FAQ(){
  let faqDomList = faqList.faq.map((QA,i) =>{
    return (
        <li key={i} onClick={ () => handleFaqClick()}
        className={styles.questionAnswer}>
          <div className={styles.questionContainer}>
            <p className={styles.question}>{QA.question}</p>
            <p className={styles.carrot}>&#8964;</p>
          </div>
          <div className={styles.answerContainer} >
            <p className={styles.answer +" "+ styles.open}>{QA.answer}</p>
          </div>
        </li>
  )
  });
  return(
    <section className={styles.faq}>
      <header className={styles.faqTitle}>Frequently Asked Questions</header>
      <ul className={styles.faqContainer}>
        {faqDomList}
      </ul>
    </section>
  )
}
