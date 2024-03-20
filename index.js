import { MACSKALISTA } from "./adat.js";
import { kartyaOsszeallit } from "./fuggvenyek.js";

const KIVALASZTOTTAK=[]
let db=0
const nevELEM=document.getElementsByClassName("nev")

const tartalomELEM=document.getElementsByClassName("tartalom")
tartalomELEM[0].innerHTML=kartyaOsszeallit(MACSKALISTA)

const kartyaELEM=document.querySelectorAll(".tartalom .kartya")
for (let index = 0; index < kartyaELEM.length; index++) {
    kartyaELEM[index].addEventListener("mouseover", function(event){
        event.target.closest("div").classList.add("kiv")
    })   
    kartyaELEM[index].addEventListener("mouseout", function(event){
        event.target.closest("div").classList.remove("kiv")
    })
    kartyaELEM[index].addEventListener("click", function(event){
        if(KIVALASZTOTTAK.indexOf(MACSKALISTA[index].nev) == -1){
            KIVALASZTOTTAK.push(MACSKALISTA[index].nev)
        }console.log(KIVALASZTOTTAK)
        felsorolasKivalasztottak(KIVALASZTOTTAK)
        //if(KIVALASZTOTTAK.includes(MACSKALISTA[index].nev)){
        //    db+=1
        //   nevELEM[index].innerHTML+=`${db}`
        //}
    })

   

}


const kivalasztottakELEM=document.getElementsByClassName("kivalasztott")

function felsorolasKivalasztottak(lista){
    console.log(lista)
    let txt=""
    for (let index = 0; index < lista.length; index++) {
        txt+=`<li>${lista[index]}</li>`
    }
    console.log(txt)
    kivalasztottakELEM[0].innerHTML=txt
    return txt
}