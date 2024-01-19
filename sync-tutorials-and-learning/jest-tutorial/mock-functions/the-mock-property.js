const myMock1 = jest.fn();
// eslint-disable-next-line no-unused-vars
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const mocking = () => {
	const myMock2 = jest.fn();
	const b = {};
	const bound = myMock2.bind(b);
	bound();
	console.log(myMock2.mock.contexts);
	// > [ <b> ]
};

module.exports = { mocking: mocking };
