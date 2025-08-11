import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Matheus Oliveira</span> <br />
          Dev Front End
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Sobre mim
        </Link>
      </div>
      <figure>
        <img
          className={styles.img_home}
          src="/developer-red.svg"
          alt="imagem de home"
        />
      </figure>
    </section>
  );
}

export default Home;
