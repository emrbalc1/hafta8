import { useState } from "react";

function App() {
  const [bfiyat, bfiyatGuncelle] = useState("");
  const [adet, adetGuncelle] = useState("");
  const [kdv, kdvGuncelle] = useState("");
  const [sonuc, sonucGuncelle] = useState(0);

  function formGonderim(olay) {
    olay.preventDefault();

    let tutar = parseInt(bfiyat) * parseInt(adet)
    tutar = tutar + (tutar/100) * parseInt(kdv)
    
    sonucGuncelle(tutar)
  }

  return (
    <>
      <form method="post" onSubmit={formGonderim}>
        <input
          type="text"
          placeholder="Birim Fiyat"
          onChange={(olay) => bfiyatGuncelle(olay.target.value)}
        />
        <input
          type="text"
          placeholder="Adet"
          onChange={(olay) => adetGuncelle(olay.target.value)}
        />
        <input
          type="text"
          placeholder="KDV % ör: 18"
          onChange={(olay) => kdvGuncelle(olay.target.value)}
        />
        <button type="submit">Hesapla</button>
      </form>

      <p>{sonuc}</p>
    </>
  );
}

export default App;
