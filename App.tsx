import useCachedResources from "./src/hooks/useCachedResources";
import * as React from "react";
import Route from "./src/components/routes/route";
import { PokemonProvider } from "./src/context/context-app";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <Route />;
  }
}
