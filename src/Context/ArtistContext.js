import { func } from "prop-types";
import { createContext, useContext, useState } from "react";

const ArtistContext = createContext();

export function ShowArtist({ children }) {
  const [artistName, setArtistName] = useState("Drake");

  const showArtist = (item) => {
    setArtistName(item);
  };

  const values = { artistName, showArtist };

  return (
    <ArtistContext.Provider value={values}>{children}</ArtistContext.Provider>
  );
}

export default ArtistContext;
