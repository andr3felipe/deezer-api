import { Card } from ".";
import { Providers } from "../../Providers";
import { render, screen, userEvent, waitFor } from "../../utils/test-utils";

describe("Card", () => {
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

  it("should properly render the card", () => {
    render(
      <Card
        id={track.id}
        artist={track.artist.name}
        image={track.album.cover_big}
        audio={track.preview}
        duration={track.duration}
        title={track.title}
        isFavorite={false}
      />
    );

    const addToFavoritesBtn = screen.getByTestId("add-to-favorites");
    const removeFromFavoritesBtn = screen.queryByTestId(
      "remove-from-favorites"
    );

    expect(screen.getByText("Till I Collapse")).toBeInTheDocument();
    expect(screen.getByText(/Eminem/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(addToFavoritesBtn).toBeInTheDocument();
    expect(removeFromFavoritesBtn).not.toBeInTheDocument();
  });

  it("should add to favorites", async () => {
    render(
      <Providers>
        <Card
          id={track.id}
          artist={track.artist.name}
          image={track.album.cover_big}
          audio={track.preview}
          duration={track.duration}
          title={track.title}
          isFavorite={false}
        />
      </Providers>
    );

    const addToFavoritesBtn = screen.getByTestId("add-to-favorites");
    await userEvent.click(addToFavoritesBtn);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    await waitFor(() => expect(favorites[0]).toEqual(track));
  });

  it("should remove from favorites", async () => {
    render(
      <Providers>
        <Card
          id={track.id}
          artist={track.artist.name}
          image={track.album.cover_big}
          audio={track.preview}
          duration={track.duration}
          title={track.title}
          isFavorite={true}
        />
      </Providers>
    );

    localStorage.setItem("favorites", JSON.stringify([track]));

    const removeFromFavoritesBtn = screen.getByTestId("remove-from-favorites");
    await userEvent.click(removeFromFavoritesBtn);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    await waitFor(() => expect(favorites).toEqual([]));
  });
});
