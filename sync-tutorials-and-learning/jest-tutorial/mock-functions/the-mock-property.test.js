const tmp = require("./theMockProperty");
const mocker = jest.fn(tmp.mocking());

test("mockingTest", () => {
	mocker();
	expect(mocker.mock.calls).toHaveLength(1);
});
