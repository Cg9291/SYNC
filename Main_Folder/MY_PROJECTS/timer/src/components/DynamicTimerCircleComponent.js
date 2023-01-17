export default function DynamicTimerCircle(props) {
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
        <path
        id="circle-path"
          d="
          M 0, 0
          m -45, 0
          a 45 45 0 0,1 90,0
          a 45 45 0 0,1 -90,0
        "
        strokeDasharray={props.timeRatioState}
        //transform="rotate(-45deg)"
        ></path>
        {/*<circle
          cx="0"
          cy="0"
          r="45"
          stroke="blue"
          strokeWidth="10"
          fill="none"
          strokeDasharray={props.timeRatioState}
        />*/}
      </g>
    </svg>
  );
}
