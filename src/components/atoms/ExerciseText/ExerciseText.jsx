import "./ExerciseText.css";

function ExerciseText({ name, description }) {
  return (
    <div className="exercise-text">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ExerciseText;