import { Home } from ".";
import { Providers } from "../../Providers";
import { render, screen, waitFor } from "../../utils/test-utils";

describe("Home", () => {
  it("should render the home page", () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    expect(screen.getByText("Início")).toBeInTheDocument();
  });

  it("should show the loading state", () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    expect(screen.queryByText("Carregando...")).toBeInTheDocument();
  });

  it("should render the tracks", async () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    const track = await screen.findAllByText("Eminem");

    await waitFor(() => expect(track[0]).toBeInTheDocument());
  });
});
