import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MusicContext } from "../../contexts/MusicContext";
import { z } from "zod";
import { useForm } from "react-hook-form";

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
        <NavLink to="/" aria-label="Página Inicial">
          <S.House size={32} />
        </NavLink>

        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <input type="text" placeholder="Buscar" {...register("search")} />

            <button type="submit">
              <MagnifyingGlass size={32} />
            </button>
          </div>

          {errors.search && <p>{errors.search.message}</p>}
        </S.Form>

        <NavLink to="/favorites" aria-label="Página de favoritos">
          <S.Favorites>
            <S.Heart size={32} />
            <S.HeartFilled size={32} weight="fill" />
          </S.Favorites>
        </NavLink>
      </div>
    </S.Container>
  );
}
