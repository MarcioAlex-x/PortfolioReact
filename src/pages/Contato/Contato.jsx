// import { Link } from "react-router-dom";
import styles from "./Conato.module.css";
import {
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { IoLogoYoutube } from "react-icons/io";

const Contato = () => {
  return (
    <section className={styles.contato}>
      <h2>Redes Sociais e Contatos</h2>
      <p>
        Conheça mais sobre mim e entre em contato. Podemos trocar idéias e quem
        sabe criar fortes laços.
      </p>
      <div className={styles.icons_container}>
        <a
          href="https://instagram.com/marcioalex586"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className={styles.icon} />
        </a>
        <a
          href="https://github.com/MarcioAlex-x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/alex-freitas-6a510621a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          href="https://instagram.com/marcioalex586"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsappSquare className={styles.icon} />
        </a>

        <a
          href="mailto:marcioalex586@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className={styles.icon} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCgJlN5RfpUTVI4sTkTJLdPw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoYoutube className={styles.icon} />
        </a>
      </div>
    </section>
  );
};
export default Contato;
