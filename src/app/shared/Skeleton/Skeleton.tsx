import React, { memo, CSSProperties } from "react";

type TextSkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

const TextSkeleton = memo(({ className, style }: TextSkeletonProps) => (
  <div
    style={{
      width: `${Math.min(Math.max(Math.random(), 0.3), 0.8) * 100}%`,
      ...style
    }}
    className={className}
  ></div>
));

export default TextSkeleton;
