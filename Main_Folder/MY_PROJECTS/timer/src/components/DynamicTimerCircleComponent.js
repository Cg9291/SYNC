export default function DynamicTimerCircle() {
  return (
    <svg
      id="dynamic-timer-circle-svg"
      width="100"
      height="100"
      viewBox="-50 -50 100 100"
    >
      <g>
        <circle
          cx="0"
          cy="0"
          r="45"
          stroke="white"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="0"
          cy="0"
          r="45"
          stroke="blue"
          strokeWidth="10"
          fill="none"
          strokeDasharray="10 282.6"
        />
      </g>
    </svg>
  );
}
