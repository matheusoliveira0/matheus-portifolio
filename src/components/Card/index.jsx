import styles from "./Card.module.css";
import {
  BsFiletypeHtml,
  BsFiletypeCss,
  BsFiletypeJs,
  BsFiletypeSql,
  BsBootstrap,
  BsArrowRight,
} from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

// Mapeamento linguagem → ícone
const iconsMap = {
  HTML: <BsFiletypeHtml title="HTML" />,
  CSS: <BsFiletypeCss title="CSS" />,
  JS: <BsFiletypeJs title="JavaScript" />,
  SQL: <BsFiletypeSql title="SQL" />,
  Bootstrap: <BsBootstrap title="Bootstrap" />,
  Tailwind: <RiTailwindCssFill title="Tailwind CSS" />,
  React: <FaReact title="React" />,
};

function Card({ name, description, language, demoUrl }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>

      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          {language?.map((lang, index) => (
            <span key={index}>{iconsMap[lang] || lang}</span>
          ))}
        </div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopenner norefferer"
          className={styles.card_btn}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
