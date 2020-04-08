
const mockAjax = {
  done: jest.fn().mockReturnThis(),
  fail: jest.fn().mockReturnThis(),
};

global.$ = {
  ajax: jest.fn(() => mockAjax)
};

// and then require your implementation
require('./path/to/ajax/call.js');


// and then you can use jest's .mock property
// https://jestjs.io/docs/en/mock-functions#mock-property
// to get your callback
const [ firstCall ] = mockAjax.done.calls;
const [ yourCallback ] = firstCall;

// and call it with mock





/*
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { userId: "mr_dm1try", url: "https://www.url1.dev" },
    ];
    const output = [{ userId: "mr_dm1try", status: "the sadness will never end" }];
    expect(showPic(input)).toEqual(output);
  });
});


function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
    const output = [{ id: 3, url: "https://www.link3.dev" }];
    expect(showPic(input, "link")).toEqual(output);
  });
});
*/
