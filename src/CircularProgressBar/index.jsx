import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressBar.css";

function getProgressColor(progress) {
  const green = hexToRgb("#34C759");
  const red = hexToRgb("#ff0000");
  const progressColor = `rgba(${lerp(green.r, red.r, progress)}, ${lerp(
    green.g,
    red.g,
    progress
  )}, ${lerp(green.b, red.b, progress)}, 1)`;
  return progressColor;
}

function lerp(start, end, progress) {
  return end + (start - end) * progress;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const CircularProgressBar = ({ completedTodos, totalTodos }) => {
  const progressColor = getProgressColor(completedTodos / totalTodos);
  return (
    <div className="CircularProgressBar">
      <CircularProgressbar
        value={completedTodos}
        maxValue={totalTodos}
        text={`${completedTodos}/${totalTodos}`}
        styles={buildStyles({
          textSize: "16px",
          pathColor: progressColor,
          textColor: "#f88",
          trailColor: "#d6d6d6#red",
        })}
      />
    </div>
  );
};

export { CircularProgressBar };
