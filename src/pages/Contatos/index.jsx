import styles from './Contatos.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>

      <div className={styles.icones}>
        <a
          href='mailto:raine.batiistaa@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MdOutlineEmail className={styles.icone} />
        </a>
        <a
          href='https://www.instagram.com/raianebtsilva/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram className={styles.icone} />
        </a>
        <a
          href='https://www.github.com/RaianeBatista'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub className={styles.icone} />
        </a>
        <a
          href='https://www.linkedin.com/in/raiane-batista-silva-chaves-08b4432b8/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin className={styles.icone} />
        </a>
        <a
          href='https://api.whatsapp.com/send/?phone=5593984253111&text&type=phone_number&app_absent=0'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsWhatsapp className={styles.icone} />
        </a>
      </div>
    </section>
  );
}

export default Contatos;
