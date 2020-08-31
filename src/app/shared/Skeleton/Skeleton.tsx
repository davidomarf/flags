import React, { memo, CSSProperties } from "react";

type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

const Skeleton = memo(({ className, style }: SkeletonProps) => (
  <div
    style={{
      width: `${Math.min(Math.max(Math.random(), 0.3), 0.8) * 100}%`,
      ...style
    }}
    className={className}
  ></div>
));

export default Skeleton;
