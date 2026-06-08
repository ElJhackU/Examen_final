import TextLabel from "../../atoms/TextLabel/TextLabel";
import Title from "../../atoms/Title/Title";
import Counter from "../../atoms/Counter/Counter";
import "./ExerciseHeader.css";

function ExerciseHeader({ total }) {
  return (
    <div className="exercise-header">
      <div>
        <TextLabel text="info" />
        <Title text="Exercicios" />
      </div>

      <Counter number={total} />
    </div>
  );
}

export default ExerciseHeader;