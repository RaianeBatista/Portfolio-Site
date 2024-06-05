import styles from './Sobre.module.css';
import avatar from '../../assets/assetsSobre/avatar.png';
import html from '../../assets/assetsSobre/html5.svg';
import css from '../../assets/assetsSobre/css3.svg';
import js from '../../assets/assetsSobre/js.svg';
import react from '../../assets/assetsSobre/react.svg';
import java from '../../assets/assetsSobre/java.svg';

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
            <strong>Dev Front-end</strong>
          </p>

          <p>Trabalho com desenvolvimento web </p>
          <p>Estudante do curso Engenharia de Software </p>

          <p>Sou apaixonada por tranformar ideias em realidade digital.</p>

          <p className={styles.description}>
            Estou participando da construção de um site (utilizando React JS,
            Bootstrap e Java), sob a mentoria da instituição de ensino
            <span>Programar com você </span>
            em parceria com a <span>Elastcod</span>.
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <figure>
            <img src={html} alt='Ícone do html' />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <img src={css} alt='Ícone do css' />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <img src={js} alt='Ícone do JavaScript' />
            <figcaption>JS</figcaption>
          </figure>
          <figure>
            <img src={react} alt='Ícone do react' />
            <figcaption>REACT</figcaption>
          </figure>
          <figure>
            <img src={java} alt='Ícone do java' />
            <figcaption>JAVA</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
