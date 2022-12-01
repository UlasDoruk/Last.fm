import { createContext, useState } from "react";

const ArtistContext = createContext();

export function ShowArtist({ children }) {
  // Oluştuduğumuz ArtistContext'in verisi olan artistName'i default olarak dolduruyoruz. Kendisini Artist sayfasında manüpüle edeceğiz.
  const [artistName, setArtistName] = useState("Drake");
  // Card sayfasındaki ünlülerin resmine ya da ismine tıklandığında veri, burada ki showArtist fonksiyonuna geliyor.
  // Bu veriyi artistName'e initialization işlemini gerçekleştiriyoruz.
  const showArtist = (item) => {
    setArtistName(item);
  };
  // Alttaki provider'e geçeceğimiz değerleri burada önceden atıyoruz
  const values = { artistName, showArtist };

  return (
    <ArtistContext.Provider value={values}>{children}</ArtistContext.Provider>
  );
}

export default ArtistContext;
