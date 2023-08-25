export function SvgIcon(props) {
	return (
		<svg
			className={props.classNames}
			viewBox="0 0 24 24 "
		>
			<g>
				<path d={props.path}></path>
			</g>
		</svg>
	);
}
