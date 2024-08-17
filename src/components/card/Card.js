import "./card.scss";
const Card = ({ project, tecnologies }) => {
  return (
    <a target="_blank" href={project?.url}>
      <div className="card">
        <div className="card__image">
          <img src={project?.image} alt="project" />
        </div>
        <div className="card__title">{project?.title}</div>
        <div className="card__technologies">
          {tecnologies.map((tech) => (
            <div key={tech.id}>
              <img src={tech?.image} alt="tech" />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
