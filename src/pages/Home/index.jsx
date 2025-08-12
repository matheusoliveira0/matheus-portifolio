import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import devImg from "./developer-red.png"

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
        <img src={devImg} alt="imagem de home" className={styles.img_home} />
      </figure>
    </section>
  );
}

export default Home;
