import { Header } from ".";
import { render, screen, userEvent, waitFor } from "../../utils/test-utils";
import { Providers } from "../../Providers";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <Providers>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Providers>
    );
  });

  it("should render the header", () => {
    const homeLink = screen.getByTestId("house");
    const searchInput = screen.getByTestId("search");
    const favoritesLink = screen.getByTestId("favorites");

    expect(homeLink).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  it("should type correct value in search input", async () => {
    const searchInput = screen.getByTestId("search");
    const searchButton = screen.getByTestId("search-button");

    await userEvent.type(searchInput, "akon");
    await userEvent.click(searchButton);

    await waitFor(() => expect(searchInput).toHaveValue("akon"));
  });

  it("should navigate to favorites page", async () => {
    const favoritesLink = screen.getByTestId("favorites");

    await userEvent.click(favoritesLink);

    await waitFor(() => expect(window.location.pathname).toBe("/favorites"));
  });

  it("should navigate from favorites page to home page", async () => {
    const favoritesLink = screen.getByTestId("favorites");
    const homeLink = screen.getByTestId("house");

    await userEvent.click(favoritesLink);
    await userEvent.click(homeLink);

    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
