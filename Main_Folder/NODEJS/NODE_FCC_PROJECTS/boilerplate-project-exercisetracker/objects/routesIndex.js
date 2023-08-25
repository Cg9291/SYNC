export const routesIndex = {
	rootEndpoint: ps =>
		/*  "/" */
		ps[0] === "" && ps[1] === "" && ps.length === 2,

	usersEndpoint: ps =>
		ps[0] === "" && ps[1] === "api" && ps[2] === "users" && ps.length === 3,
};
