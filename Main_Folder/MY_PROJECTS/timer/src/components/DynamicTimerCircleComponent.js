import Circle from "./CircleComponent.js";

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
        <text x="-40" y="0" font-family="Verdana" font-size="15" fill="red">wowowf</text>
        <foreignObject x="0%" y="0%" width="80" height="80">
          {/* <Circle> */}
        </foreignObject>
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
