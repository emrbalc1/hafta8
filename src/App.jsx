import { useEffect, useState } from "react"

function App() {
    const [sayac, sayacGuncelle] = useState(0)

    const sayacArttir = ()=>{
        sayacGuncelle( oncekiDeger=>oncekiDeger + 1 )
    }

    useEffect( ()=>{
        console.log("1. useeffect çalıştı" + sayac)

        const tarayiciSayac = JSON.parse(localStorage.getItem('tarayiciSayac'))

        if (tarayiciSayac) {
            sayacGuncelle(tarayiciSayac);
        }
    }, [] )

    useEffect( ()=>{
        console.log("2. useeffect çalıştı" + sayac)

        localStorage.setItem("tarayiciSayac", JSON.stringify(sayac))

    } , [sayac] )

    return (
        <>
            <button onClick={sayacArttir}>Arttır</button>
            <span>{sayac}</span>
        </>
    )
}

export default App