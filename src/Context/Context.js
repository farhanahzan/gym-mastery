import { createContext, useContext } from "react";

export const ExerciseProvider = createContext();

export const useExerciseConsumer = ()  => useContext(ExerciseProvider);

