import { receptMegjelenit } from "./fuggveny.js";
import { Rlista } from "./adat.js";


let Elem=document.getElementById("kaja");
let txt="";
    for (let index = 0; index < Rlista.length; index++) {
        txt+=`<div class=kaja>
                <h2>${Rlista[index].nev}</h2>
                <p>${Rlista[index].neh}</p>
                <p>${Rlista[index].ido}</p>
                <img src="${Rlista[index].img}" alt="${Rlista[index].nev}">
                </div>
                `;
}
console.log(txt)
Elem.innerHTML=txt;