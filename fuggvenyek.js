

export function kartyaOsszeallit(MACSKALISTA){
    let txt="";
    for (let index = 0; index < MACSKALISTA.length; index++) {
        txt+= `<div class="kartya">
        <img src="cica.png" alt="cica">
        <h3 class="nev">név: ${MACSKALISTA[index].nev}</h3>
        <p>kor: ${MACSKALISTA[index].kor}</p>
        <p>fajta: ${MACSKALISTA[index].fajta}</p>
        </div>`
        
    }
    return txt
}


