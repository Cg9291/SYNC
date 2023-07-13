export default function tweetStats(icon, value) {
	return (
		<div className="timeline-backup_statistics-row_group">
			<span className="timeline-backup_statistics-row_icons-wrapper">
				{icon}
			</span>
			<span className="timeline-backup_statistics-row_values"> {value}</span>
		</div>
	);
}
