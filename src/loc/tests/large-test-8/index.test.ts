import code from './code'
import run from '../../../loc'
const opts = {
  code
}

describe("Lines of code", () => {
  test("Test 8", () => {
    const expected = 32

    expect(run(opts)).toEqual(expected);
  });
});




