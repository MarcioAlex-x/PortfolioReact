import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>Olá, sou</p>
        <h1>Alex Freitas</h1>
        <p>Desenvolvedor da Web</p>
        <span>e</span>
        <p>Professor de Programação</p>

        <Link to="/" className={`${styles.btn} ${styles.btn_red}`}>
          Conheça mais
        </Link>
      </div>
      <figure>
        <img
          className="img_principal"
          src="/imagem-principal.svg"
          alt="Imagem principal"
        />
      </figure>
    </section>
  );
};

export default Home;
