import "./ExerciseImage.css";

function ExerciseImage({ src, alt }) {
  return <img className="exercise-image" src={src} alt={alt} />;
}

export default ExerciseImage;