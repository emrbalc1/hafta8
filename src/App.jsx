import { useState } from "react";

function App() {
  const [bfiyat, bfiyatGuncelle] = useState(0);
  const [adet, adetGuncelle] = useState(0);
  const [kdv, kdvGuncelle] = useState(0);
  const [sonuc, sonucGuncelle] = useState(0);

  function formGonderim(olay) {
    olay.preventDefault();
  }

    let tutar = parseInt(bfiyat) * parseInt(adet)
    tutar = tutar + (tutar/100) * parseInt(kdv)

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
      </form>

      <p>{tutar}TL</p>
    </>
  );
}

export default App;
