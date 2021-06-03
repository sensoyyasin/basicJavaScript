let sayi1 = 10;
sayi1 = "Yasin Sensoy"
let student = {id:1,name:"Yasin"}
console.log(student);

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " + puan)
}
//save(student,100);

let students = ["Yasin Sensoy","Engin Demirog"]
//console.log(students);

let students2 = [student]

//rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")


//spread - ayrıstırmak
let points = [1,2,3,4,5,6,7,8,9,10]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,veryhigh] = populations
console.log(small)
console.log(medium)
console.log(veryhigh)
console.log(high)


function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])
