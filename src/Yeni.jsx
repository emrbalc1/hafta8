import { useEffect, useState } from "react"

function Yeni() {
    const [ad, adGuncelle] = useState("")
    const [soyad, soyadGuncelle] = useState("")
    const [tel, telGuncelle] = useState("")
    const [kaydet, kaydetGuncelle] = useState(false)

    function kisiKaydet(olay) {
        olay.preventDefault()
        kaydetGuncelle(true)
    }

    useEffect(()=>{
        if(kaydet) {
            let tarayiciKisiler = JSON.parse(localStorage.getItem("tarayiciKisiler"))
            if(!tarayiciKisiler) {
                tarayiciKisiler = []
            }
    
            tarayiciKisiler = [ ...tarayiciKisiler, {ad:ad, soyad:soyad, tel:tel} ]
    
            localStorage.setItem( "tarayiciKisiler", JSON.stringify(tarayiciKisiler) )

            kaydetGuncelle(false)
        }
       
    }, [kaydet])

    return (
        <>
            <h2>Yeni Kayıt Ekle</h2>
            <form method="post" onSubmit={kisiKaydet}>
                <input value={ad} onChange={olay=>adGuncelle(olay.target.value)} type="text" placeholder="Ad" /> <br />
                <input value={soyad} onChange={olay=>soyadGuncelle(olay.target.value)} type="text" placeholder="Soyad" /> <br />
                <input value={tel} onChange={olay=>telGuncelle(olay.target.value)} type="text" placeholder="Telefon" /> <br />
                <button type="submit">Kaydet</button>
            </form>
        </>
    )
}

export default Yeni