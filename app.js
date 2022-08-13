const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "blue", "orange", "pink", "aqua"];

button .addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
    //rastgele bir reenk
     //const rastgeleSayi = Math.floor(Math.random() * colors.length);
     //const secilenRenk = colors[rastgeleSayi];
     //console.log(rastgeleSayi, secilenRenk);
     //body.style.backgroundColor = secilenRenk;

    //sırayla arkaplan rengi seç
    
    if (sıra == 7) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra ++;
    body.style.backgroundColor = secilenRenk;

}