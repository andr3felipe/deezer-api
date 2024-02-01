import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";
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
        <NavLink to="/" aria-label="Página Inicial">
          <S.House size={32} />
        </NavLink>

        <S.Form
          onSubmit={handleSubmit(handleFormSubmit)}
          error={errors.search ? true : false}
        >
          <div>
            <input
              type="text"
              placeholder="Buscar"
              {...register("search")}
              minLength={1}
            />

            <button type="submit" aria-label="Buscar">
              <MagnifyingGlass size={32} />
            </button>
          </div>
        </S.Form>

        <NavLink to="/favorites" aria-label="Página de favoritos">
          <Heart />
        </NavLink>
      </div>
    </S.Container>
  );
}
