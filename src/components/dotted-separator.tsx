import React from "react";

interface DootedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "verticalf";
}

const DottedSeparator = ({
  className,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DootedSeparatorProps) => {
  return <div>DottedSeparator</div>;
};

export default DottedSeparator;
