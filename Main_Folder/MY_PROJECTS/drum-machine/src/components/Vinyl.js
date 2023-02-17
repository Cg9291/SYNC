export default function Vinyl() {
  return (
    <div className="col-11">
      <svg
        width="100%"
        height="100vh"
        viewBox="0 0 200 200"
        // fill="red"
        className=""
      >
        <circle
          cx="100"
          cy="100"
          r="49"
          fill="darkturquoise"
        ></circle>
        <circle
          className="vynil-grey-parts"
          cx="100"
          cy="100"
          r="43"
          fill="black"
          //opacity="0.5"
          // stroke="black"
          strokeWidth="0.1"
        ></circle>
        <circle
          className="vynil-grey-parts"
          cx="100"
          cy="100"
          r="38"
          stroke="black"
          strokeWidth="0.1"
        ></circle>
        <circle
          className="vynil-grey-parts"
          cx="100"
          cy="100"
          r="34"
          stroke="black"
          strokeWidth="0.1"
        ></circle>
        <circle
          cx="100"
          cy="100"
          r="27"
          fill="black"
        ></circle>
        <circle
          cx="100"
          cy="100"
          r="16"
          fill="red"
        ></circle>
        <circle
          cx="99.6"
          cy="100.7"
          r="4"
          fill="black"
        ></circle>
        <circle
          cx="100"
          cy="100"
          r="4"
          fill="white"
        ></circle>
        <svg
          x="-65"
          y="-97"
          width={"100"}
          height="100%"
          viewBox="0 0 100 100"
          fill="yellow"
        >
          <circle
            cx="100"
            cy="100"
            r="10"
            fill="darkturquoise"
          ></circle>
          <circle
            cx="100"
            cy="100"
            r="7"
            fill="black"
          ></circle>
          <circle
            cx="100"
            cy="100"
            r="4"
            fill="lightgrey"
          ></circle>
        </svg>
        <svg
          x="50"
          y="-2"
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
      </svg>
    </div>
  );
}
