import React from "react";
import { HeadContents, Logo } from "./styled";

import pokemonIMG from "../../../../assets/images/pokemon.png";
import Search from "../Search/search";

const Header = () => {
  return (
    <HeadContents>
      <Logo source={pokemonIMG} />
      <Search />
    </HeadContents>
  );
};

export default Header;
