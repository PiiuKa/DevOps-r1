const workouts = [];

const createWorkout = (username) => {
  if (typeof username !== "string" || username.length < 4) {
    throw new Error("the parameter username is not valid");
  }
  const workout = { id: workouts.length + 1, username, exercises: [] };
  workouts.push(workout);
  return workout;
};

const addExercise = (workoutId, exerciseName) => {
  const workout = workouts.find((w) => w.id === workoutId);
  if (!workout) {
    throw new Error(`Workout ${workoutId} not found`);
  }
  workout.exercises.push(exerciseName);
  return { workoutId, exerciseName };
};

const removeExercise = (workoutId, exerciseName) => {
  const workout = workouts.find((w) => w.id === workoutId);
  if (!workout) {
    throw new Error(`Workout ${workoutId} not found`);
  }
  workout.exercises.pop(exerciseName);
  return { workoutId, exerciseName };
};

export { addExercise, createWorkout, removeExercise, workouts };
