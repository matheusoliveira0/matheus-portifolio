import styles from "./Contatos.module.css";
import { useState } from "react";
import { GoMail } from "react-icons/go";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Contatos() {
  const email = "roliveiramatheus@outlook.com";
  const [msg, setMsg] = useState("");

  const handleClickEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setMsg("Email copiado para a área de transferência!");
      window.location.href = `mailto:${email}`;
      setTimeout(() => setMsg(""), 3000);
    }).catch(() => {
      setMsg("Não foi possível copiar o email.");
      setTimeout(() => setMsg(""), 3000);
    });
  };

  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>

      <div className={styles.icones}>
        <a
          href={`mailto:${email}`}
          onClick={handleClickEmail}
          className={styles.icone}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <GoMail />
          
        </a>

        <a
          href="https://github.com/matheusoliveira0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className={styles.icone} />
        </a>
        <a
          href="https://www.linkedin.com/in/mattheus0liveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className={styles.icone} />
        </a>

        <a
          href="https://wa.me/5511946103677"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className={styles.icone} />
        </a>
      </div>

      {/* Toast de mensagem */}
      {msg && <div className={styles.toast}>{msg}</div>}
    </section>
  );
}

export default Contatos;



// import styles from "./Contatos.module.css";
// import { GoMail } from "react-icons/go";
// import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

// function Contatos() {
//   return (
//     <section className={styles.contatos}>
//       <h2>Contatos</h2>
//       <h3>Entre em contato</h3>
//       <p>Para que possamos conversar mais sobre.</p>

//       <div className={styles.icones}>
//         <a href="mailto:roliveiramatheus@outlook.com">
//           <GoMail className={styles.icone} />
//         </a>

//         <a
//           href="https://github.com/matheusoliveira0"
//           target="-blank"
//           rel="noopener noreferrer"
//         >
//           <BsGithub className={styles.icone} />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/mattheus0liveira/"
//           target="-blank"
//           rel="noopener noreferrer"
//         >
//           <BsLinkedin className={styles.icone} />
//         </a>

//         <a
//           href="https://wa.me/5511946103677"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <BsWhatsapp className={styles.icone} />
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Contatos;
