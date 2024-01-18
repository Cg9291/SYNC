export default function Display(props) {
  return (
		<div className=" h-25   d-flex flex-column justify-content-center  rounded m-0 mb-4 p-0 shadow px-1 bg-color2">
			<div
				className="  text-light d-flex flex-column
                align-items-end fs-1  mt-auto bg-color2 h-50 m-0 p-0 "
			>
				<div>{props.input}</div>
			</div>
			<div
				id="display"
				className="  text-light d-flex
                flex-column align-items-end justify-content-end fs-1  m-0 p-0 bg-color2 h-50  "
			>
				<div>{props.output}</div>
			</div>
		</div>
	);
}
