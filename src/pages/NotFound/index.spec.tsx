import { BrowserRouter } from "react-router-dom";
import { NotFound } from ".";
import { render, screen, userEvent, waitFor } from "../../utils/test-utils";

describe("NotFound", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    screen.debug();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it("should redirect to home on click", async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const homeButton = screen.getByText(/Voltar para a home/i);

    expect(homeButton).toBeInTheDocument();

    await userEvent.click(homeButton);

    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
