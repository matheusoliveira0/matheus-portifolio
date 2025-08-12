import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar do usuário" className={styles.avatar} />

        <div className={styles.biografia}>
          <h2>Sobre</h2>

          <p>
            Sou <span>Matheus Oliveira</span> <br />
            <strong>Dev Front-end</strong>
          </p>
          <p>👨‍💻 Dev em formação</p>
          <p>❤️ Apaixonado por Front-end</p>
          <p>⚛️ React, JavaScript e estudo constante de novas tecnologias</p>
          {/* <p>📂 Projetos práticos para aprender e compartilhar código limpo</p> */}
          <p>🎯 Sempre buscando evoluir e encarar novos desafios</p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="Ícone do HTML" />
          <img src={css} alt="Ícone do css" />
          <img src={js} alt="Ícone do js" />
          <img src={react} alt="Ícone do react" />
          <img src={node} alt="Ícone do node" />
          <img src={sql} alt="Ícone do sql" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
