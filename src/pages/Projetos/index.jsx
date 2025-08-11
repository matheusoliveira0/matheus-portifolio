import styles from "./Projetos.module.css";
import Card from "../../components/Card";
import projects from "../../json/projetos.json"; // importe seu JSON local

function Projetos() {
  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {projects.length > 0 ? (
        <section className={styles.lista}>
          {projects.map((project) => (
            <Card
              key={project.id}
              name={project.name}
              description={project.description}
              language={project.language}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </section>
      ) : (
        <p>Carregando projetos...</p>
      )}
    </section>
  );
}

export default Projetos;
