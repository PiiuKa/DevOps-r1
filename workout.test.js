import { addExercise, createWorkout, workouts } from "./workout.js";

beforeEach(() => {
  workouts.length = 0;
});

describe("createWorkout", () => {
  test("create a workout for a valid username", () => {
    createWorkout("Heimo Tulo");
    expect(workouts).toEqual([
      { id: 1, username: "Heimo Tulo", exercises: [] },
    ]);
  });

  test("create a workout for a missing username", () => {
    expect.hasAssertions();
    try {
      createWorkout();
    } catch (e) {
      expect(workouts).toEqual([]);
    }
  });

  test("create a workout with invalid parameter value throws error", () => {
    expect(() => createWorkout("HT")).toThrow();
    expect(workouts).toEqual([]);
  });

  test("create a workout for a too short username", () => {
    expect.assertions(1);
    try {
      createWorkout("HT");
    } catch (e) {
      expect(workouts).toEqual([]);
    }
  });
});

describe("addExercise", () => {
  test("add an exercise to the workout", () => {
    const workout = createWorkout("Heimo Tulo");
    addExercise(workout.id, "squats");
    expect(workout.exercises).toEqual(["squats"]);
  });
});
