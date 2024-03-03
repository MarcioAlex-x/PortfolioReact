import styles from "./Sobre.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaJava, FaGitAlt, FaGithub  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango, SiJquery  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


const Sobre = () => {
  return (
      <section>
        <figure>
          <img
            className={styles.img_sobre}
            src="/alexfreitas.png"
            alt="Imagemd de Alex Freitas"
          />
        </figure>
        <div className={styles.sobre}>
          <h2>Bem-vindo ao meu portfólio!</h2>
          <p>
            Olá! Sou Alex Freitas, estudante de Sistemas para Internet,
            desenvolvedor web e professor de programação. Meu objetivo é criar
            soluções inovadoras enquanto compartilho meu conhecimento com outros
            entusiastas da tecnologia. Explore meu trabalho e entre em contato
            para colaborações. Obrigado por visitar!
          </p>
          <p className={styles.assinatura}>Alex Freitas</p>
          {/* <hr className={styles.divisor} /> */}
          <h3 className={styles.titulo_stacks}>Stacks</h3>
          <div className={styles.stacks}> 
         
            <FaHtml5  className={styles.stack} />
            <FaCss3Alt  className={styles.stack} />
            <IoLogoJavascript  className={styles.stack} />
            <SiJquery  className={styles.stack} />
            <FaBootstrap  className={styles.stack} />
            <FaReact  className={styles.stack} />
            <SiDjango  className={styles.stack} />
            <FaPython  className={styles.stack} />
            <FaJava  className={styles.stack} />
            <FaGitAlt  className={styles.stack} />
            <FaGithub  className={styles.stack} />
            <GrMysql className={styles.stack} />

          </div>
        </div>
      </section>
  );
};
export default Sobre;
