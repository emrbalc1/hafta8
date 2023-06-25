import { useEffect, useState } from "react"
import Liste from "./Liste"
import Yeni from "./Yeni"

function App() {
    const [listeGoster, listeGosterGuncelle] = useState(true)
    const [yeniGoster, yeniGosterGuncelle] = useState(false)
    const [temizle, temizleGuncelle] = useState(false)

    function listeAc() {
        listeGosterGuncelle(true)
        yeniGosterGuncelle(false)
    }

    function yeniAc() {
        listeGosterGuncelle(false)
        yeniGosterGuncelle(true)
    }

    function rehberTemizle() {
        temizleGuncelle(true)
    }

    useEffect(()=>{
        if(temizle) {
            localStorage.setItem( "tarayiciKisiler", JSON.stringify([]) )

            temizleGuncelle(false)
        }
    }, [temizle])

    return (
        <>
            <button onClick={listeAc}>Liste</button>
            <button onClick={yeniAc}>Yeni Kayıt</button>
            <button onClick={rehberTemizle}>Rehberi Temizle</button>
            {listeGoster && !temizle && <Liste />}
            {yeniGoster && <Yeni />}
        </>
    )
}

export default App