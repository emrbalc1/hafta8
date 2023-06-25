import { useState } from "react"

function App() {
    const [kirmizi, kirmiziGuncelle] = useState(0)
    const [yesil, yesilGuncelle] = useState(0)
    const [mavi, maviGuncelle] = useState(0)
    const [hata, hataGuncelle] = useState("")

    function aralikKontrol(olay, renk) {
        let deger = olay.target.value
        deger = parseInt(deger)

        if( deger < 0 || deger > 255 ) { //hata var
            hataGuncelle("Girilen değer 0-255 arasında olmalıdır.")
        } else { //hata yok
            hataGuncelle("")
        }

        switch (renk) {
            case "kirmizi":
                kirmiziGuncelle(deger)
                break
            case "yesil":
                yesilGuncelle(deger)
                break
            case "mavi":
                maviGuncelle(deger)
                break
        }
        
    }

    return (
        <>
            <div style={{ width: "200px", height: "200px", backgroundColor: `rgb(${kirmizi},${yesil},${mavi})` }}>KUTU1</div>

            <div>
                Kırmızı: <br />
                <input value={kirmizi} type="text" placeholder="Kırmızı" onChange={ olay=>aralikKontrol(olay, "kirmizi") } />
            </div>

            <div>
                Yeşil: <br />
                <input value={yesil} type="text" placeholder="Yeşil" onChange={ olay=>aralikKontrol(olay, "yesil")  } />
            </div>

            <div>
                Mavi: <br />
                <input value={mavi} type="text" placeholder="Mavi" onChange={ olay=>aralikKontrol(olay, "mavi")  } />
            </div>

            <p style={{color:"red"}}>{hata}</p>
        </>
    )
}

export default App
