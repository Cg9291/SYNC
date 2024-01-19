export const routesIndex = {
	rootEndpoint: ps =>
		/*  "/" */
		ps[0] === "" && ps[1] === "" && ps.length === 2,

	usersEndpoint: ps =>
		ps[0] === "" && ps[1] === "api" && ps[2] === "users" && ps.length === 3,
	exercisesEndpoint: ps =>
		ps[0] === "" &&
		ps[1] === "api" &&
		ps[2] === "users" &&
		ps[3] &&
		ps[4] === "exercises" &&
		ps.length === 5,
	logsEndpoint: ps =>
		ps[0] === "" &&
		ps[1] === "api" &&
		ps[2] === "users" &&
		ps[3] &&
		ps[4] === "logs" &&
		ps.length === 5,
};
