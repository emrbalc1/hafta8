import { useEffect, useState } from "react"

function Liste() {
    const [kisiler, kisilerGuncelle] = useState([])

    useEffect(()=>{
        let tarayiciKisiler = JSON.parse(localStorage.getItem("tarayiciKisiler"))

        if(!tarayiciKisiler) {
            tarayiciKisiler = []
        }

        kisilerGuncelle(tarayiciKisiler)
    }, [])

    return (
        <>
            <h2>Kişi Listesi</h2>
            <ul>
                { kisiler.map( kisi=>{
                    return <li key={kisi.tel}> {kisi.ad} {kisi.soyad} {kisi.tel}  </li>
                } ) }
            </ul>

            {!kisiler.length && <p>Hiç kayıt yok</p>}
        </>
    )
}

export default Liste