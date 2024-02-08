import App from "./App";
import { render } from "./utils/test-utils";

describe("App", () => {
  it("should render", () => {
    render(<App />);

    expect(true).toBe(true);
  });
});
