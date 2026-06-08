import ExerciseHeader from "../../molecules/ExerciseHeader/ExerciseHeader";
import ExerciseCard from "../../molecules/ExerciseCard/ExerciseCard";
import "./ExercisesSection.css";

function ExercisesSection() {
  const exercises = [
    {
      name: "Puxada frontal",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Remada curvada",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Remada unilateral",
      description: "3 series x 12 repeticiones",
      image:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=400&q=80",
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