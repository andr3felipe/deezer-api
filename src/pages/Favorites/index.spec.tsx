import { Favorites } from ".";
import { Providers } from "../../Providers";
import { render, screen } from "../../utils/test-utils";

describe("Favorites", () => {
  const track = {
    id: 1,
    title: "Till I Collapse",
    duration: 300,
    preview:
      "https://cdns-preview-1.dzcdn.net/stream/c-12eca10f7e8e55f7f83c14b3552f1940-9.mp3",
    album: {
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
    },
    artist: { name: "Eminem" },
  };

  it("should render the favorites page", () => {
    render(
      <Providers>
        <Favorites />
      </Providers>
    );

    expect(screen.getByText("Favoritos")).toBeInTheDocument();
  });

  it("should render the favorites page with no favorites", () => {
    render(
      <Providers>
        <Favorites />
      </Providers>
    );
    expect(screen.getByText("Você não tem favoritos.")).toBeInTheDocument();
  });

  it("should show the favorites", () => {
    localStorage.setItem("favorites", JSON.stringify([track]));

    render(
      <Providers>
        <Favorites />
      </Providers>
    );

    expect(screen.queryByText(/Eminem/)).toBeInTheDocument();
  });
});
