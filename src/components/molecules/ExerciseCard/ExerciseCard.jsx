import TextLabel from "../../atoms/TextLabel/TextLabel";
import ExerciseImage from "../../atoms/ExerciseImage/ExerciseImage";
import ExerciseText from "../../atoms/ExerciseText/ExerciseText";
import ArrowIcon from "../../atoms/ArrowIcon/ArrowIcon";
import "./ExerciseCard.css";

function ExerciseCard({ image, name, description }) {
  return (
    <div className="exercise-item">
      <TextLabel text="item" />

      <div className="exercise-card">
        <ExerciseImage src={image} alt={name} />

        <ExerciseText name={name} description={description} />

        <ArrowIcon />
      </div>
    </div>
  );
}

export default ExerciseCard;