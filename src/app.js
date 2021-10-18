console.log("Merhaba Dogan")

//var yok let var daha esnek ve hata alınması daha zor
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const sabit benzersiz
const euroDun = 11.2

console.log(euroDun)

//Değişken tanımlama kuralları
//camelCasing 
//PascalCasing

//array

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length ; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)