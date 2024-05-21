import styles from './Sobre.module.css';
import avatar from './images/avatar.png';
import html from './images/html5.svg';
import css from './images/css3.svg';
import js from './images/js.svg';
import react from './images/react.svg';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt='Avatar' className={styles.avatar} />

        <div className={styles.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span>Raiane Batista </span>
            <br />
            <strong>Dev Full Stack</strong>
          </p>

          <p>Trabalho com desenvolvimento web </p>
          <p>Estudante do curso Engenharia de Software </p>

          <p>Sou apaixonada por tranformar ideias em realidade digital.</p>

          <p>
            Especializada em criação de aplicações dinâmicas e intuitivas,
            <br />
            com foco na experência do usuário.
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt='Ícone do html' />
          <img src={css} alt='Ícone do css' />
          <img src={js} alt='Ícone do javascript' />
          <img src={react} alt='Ícone do react' />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
