export default function Vinyl() {
  return (
    <div
      id="vinyl"
      className="col-11"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="border"
      >
        <g style={{ transform: "scale(1) translate(0)" }}>
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

          <svg
             x="5"
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
            x="29.8"
            y="-25"
            width={"100"}
            height="100%"
            viewBox="0 0 100 100"
            fill="red"
          >
            <rect
              width="6"
              height="4"
              transform="rotate(12) translate(28,56.5)"
              style={{ fill: "rgba(70,70,70,1)" }}
            />
            <rect
              width="12"
              height="1.7"
              transform="rotate(12) translate(16,57.7)"
              style={{ fill: "lightgrey" }}
            />
            <rect
              width="58.2"
              height="1.7"
              transform="rotate(71.3) translate(1.1,15) "
              style={{ fill: "lightgrey" }}
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
