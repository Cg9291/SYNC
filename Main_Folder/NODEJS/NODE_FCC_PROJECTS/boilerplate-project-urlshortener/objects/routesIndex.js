
export const routesIndex = {
	isRouteRoot: (ps) =>
		/*  "/" */
		ps[0] === "" &&
		ps[1] === "" &&
		ps.length === 2,

	isRouteShortUrl: (ps) =>
	/* "/api/shorturl/:shorturl" */
		ps[0] === "" &&
		ps[1] === "api" &&
		ps[2] === "shorturl" &&
		ps[3] &&
		ps.length === 4,
};
