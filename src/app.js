// console.log("Merhaba Kodlama.io")

// let dolarDun = 9.20
// let dolarBugun = 9.30

// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun)

// // const euroDun = 11.2
// // euroDun = 11

// // console.log(euroDun)

// let konutKredileri = ["Konut Kredisi", "Emlak Komut Kredisi", "Kamu Konut Kredisi"]

// console.log("<ul>")
// for(let i =0;i<konutKredileri.length;i++){
//     console.log("<li>" + konutKredileri[i] + "</li>")
// }
// console.log("</ul>")

// console.log(konutKredileri)

let sayi1 = 10;
sayi1 = "Zeynep Sunay"
let student = {id:1, name:"Zeynep"}

//console.log(student)

function save(puan=10, ogrenci){
    console.log(ogrenci.name +" :" + puan)
}
//save(undefined,student)

let students = ["Zeynep Sunay", "Alp Cihangir Aslan", "Emine Küçük", "İlayda Çelik"]

//console.log(students)

let students2 = [student,{id:2, name:"Mira"},"Ankara", {city:"İstanbul"}]

//console.log(students2)

//rest- geriye kalanlar 
//params
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)

//showProducts(10,"elma","armut","karpuz")

//Spread operatörü- ayıştırmak
let points = [1,2,3,50,4,60,14]

console.log(...points)

console.log(Math.max(...points))

//Destructring - array elemanlarının değerlerini değişkenlere atama yöntemi - parçalamak 

let populations = [10000, 20000, 30000, [40000,100000]]
let [small,medium,high, [veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}

someFunction(populations)

let category = {id:1, name:"içecek"}

console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

