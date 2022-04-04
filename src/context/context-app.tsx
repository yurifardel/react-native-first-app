import React, { createContext, ReactNode, useCallback, useState } from "react";

interface User {
  data: null;
}

interface PokemonContextData {
  user: [];
  setToPokedex(pokemons: User): void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as PokemonContextData);

export function PokemonProvider({ children }: ContextProviderProps) {
  const [pokedex, setPokedex] = useState<[]>([]);

  const setToPokedex = useCallback((pokemons) => {
    setPokedex(pokemons);
  }, []);

  return (
    <AppContext.Provider value={{ user: pokedex, setToPokedex }}>
      {children}
    </AppContext.Provider>
  );
}
