import styles from '../styles/Contact.module.css';
import Layout from '../components/layout.js';
export default function contact(){
  return (
    <Layout>
      <main className={styles.contactContainer}>
        <section className={styles.faq}>
          <header className={styles.faqTitle}>Frequently Asked Questions</header>
          <ul className={styles.faqContainer}>
            <li className={styles.questionAnswer} id="template">
              <div className={styles.questionContainer}>
                <p className={styles.question}></p>
                <p className={styles.carrot}>&#8964;</p>
              </div>
              <div className={styles.answerContainer+" "+styles.closed} >
                <p className={styles.answer}></p>
              </div>
            </li>
          </ul>
        </section>
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
