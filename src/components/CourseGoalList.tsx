import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type CourseGoal as CGoal } from "../App";
import type { ReactNode } from "react";

type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalList) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">No goals found. Start adding some goals!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have more than 4 goals. Consider focusing on fewer goals at a time.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
