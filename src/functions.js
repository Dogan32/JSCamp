function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi ->" + " Ürün : " + productName + " Adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!!!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World!!!!-v1")
} 

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürüm : " + product.productName);
    console.log("Adet : " + product.quantity);
    console.log("Fiyat : " + product.unitPrice);     
}

addToCart3(product1)


//Objeler ve Arrayler referans tipi
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)
//Çıktı KARPUZ 


//Sayılar değer tipi
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
//Çıktı 20 kod okuma sırasına göre


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Ayva", unitPrice:10, quantity:5}
]

addToCart4(products)

//REST
function add(bisey, ...numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

//SPREAD
let numbers = [10,20,30]
//console.log(...numbers)
console.log(Math.max(...numbers))

//DESTRUCTURING
let [ege,marmara,akdeniz,[egeSehirleri]] = [
    {name:"Ege", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Akdeniz", population:"25M"},
    [
        ["İzmir","Denizli"],
        ["Bursa","Balıkesir"],
        ["Antalya","Hatay"]
    ]
]

//console.log(ege.name)
//console.log(ege.population)
console.log(egeSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
