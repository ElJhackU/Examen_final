import ExerciseHeader from "../../molecules/ExerciseHeader/ExerciseHeader";
import ExerciseCard from "../../molecules/ExerciseCard/ExerciseCard";
import "./ExercisesSection.css";

function ExercisesSection() {
  const exercises = [
    {
      name: "Puxada frontal",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Remada curvada",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Remada unilateral",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Levantamiento terra",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="exercises-section">
      <ExerciseHeader total={exercises.length} />

      <div className="exercises-list">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            image={exercise.image}
            name={exercise.name}
            description={exercise.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ExercisesSection;