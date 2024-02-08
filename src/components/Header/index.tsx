import { NavLink } from "react-router-dom";
import * as S from "./styles";
import MagnifyingGlass from "@mui/icons-material/Search";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MusicContext } from "../../contexts/MusicContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Heart } from "../Heart";

const schema = z.object({
  search: z.string().min(1, "Digite algo para pesquisar"),
});

type Search = z.infer<typeof schema>;

export function Header() {
  const { handleSearch } = useContext(MusicContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Search>({
    resolver: zodResolver(schema),
  });

  function handleFormSubmit(data: Search) {
    handleSearch(data.search);
  }

  return (
    <S.Container>
      <div>
        <NavLink to="/" aria-label="Página Inicial" data-testid="house">
          <S.House />
        </NavLink>

        <S.Form
          onSubmit={handleSubmit(handleFormSubmit)}
          error={errors.search ? "true" : "false"}
        >
          <div>
            <input
              type="text"
              data-testid="search"
              placeholder="Buscar"
              {...register("search")}
              minLength={1}
            />

            <button
              type="submit"
              aria-label="Buscar"
              data-testid="search-button"
            >
              <MagnifyingGlass sx={{ fontSize: "2rem" }} />
            </button>
          </div>
        </S.Form>

        <NavLink
          to="/favorites"
          aria-label="Página de favoritos"
          data-testid="favorites"
        >
          <Heart />
        </NavLink>
      </div>
    </S.Container>
  );
}
