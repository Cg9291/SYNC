export default function Vinyl() {
  return (
    <div
      id="vinyl"
      className="col-11"
    >
      <svg
        width="100%"
        height="100vh"
        viewBox="0 0 200 200"
        className=""
      >
        <g style={{ transform: "scale(1) translate(0)" }}>
          <g style={{ transform: "scale(0.9) translate(12px,8px)" }}>
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="darkturquoise"
            ></circle>
            <circle
              className="vynil-grey-parts"
              cx="100"
              cy="100"
              r="80"
              fill="black"
              //opacity="0.5"
              // stroke="black"
              strokeWidth="0.1"
            ></circle>
            <circle
              className="vynil-grey-parts"
              cx="100"
              cy="100"
              r="70"
              stroke="black"
              strokeWidth="0.1"
            ></circle>
            <circle
              className="vynil-grey-parts"
              cx="100"
              cy="100"
              r="61"
              stroke="black"
              strokeWidth="0.1"
            ></circle>
            <circle
              cx="100"
              cy="100"
              r="47"
              fill="black"
            ></circle>
            <circle
              cx="100"
              cy="100"
              r="30"
              fill="red"
            ></circle>
            <circle
              cx="99.6"
              cy="100.7"
              r="7"
              fill="black"
            ></circle>
            <circle
              cx="100"
              cy="100"
              r="7"
              fill="white"
            ></circle>
          </g>
          <svg
            x="-5"
            y="25"
            width="80"
            height="80"
            viewBox="0 0 100 100"
          >
            <circle
              // cx="100"
              // cy="100"
              r="20"
              fill="darkturquoise"
            ></circle>
            <circle
              // cx="100"
              // cy="100"
              r="15"
              fill="black"
            ></circle>
            <circle
              // cx="100"
              // cy="100"
              r="7.5"
              fill="lightgrey"
            ></circle>
          </svg>
          <svg
            x="10"
            y="-28"
            width={"100"}
            height="100%"
            viewBox="0 0 100 100"
            fill="red"
          >
            <rect
              width="8"
              height="6"
              transform="rotate(12) translate(50,77.7)"
              style={{ fill: "rgba(70,70,70,1)" }}
            />
            <rect
              width="19"
              height="2.5"
              transform="rotate(12) translate(31.5,79.3)"
              style={{ fill: "lightgrey" }}
            />
            <rect
              width="85"
              height="2.5"
              transform="rotate(70) translate(1.1,14) "
              style={{ fill: "lightgrey" }}
            />
            <rect
              width="9"
              height="6"
              transform="rotate(12) translate(50,77.7)"
              style={{ fill: "rgba(70,70,70,1)" }}
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
