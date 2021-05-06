// peter house measures
let wide = 8;
let deep= 10;
let high = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = wide * deep * high
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseValue = 2500000
let shouldBuyTheHouse;
if (houseValue > housePrice) {
   shouldBuyTheHouse = true
} else {shouldBuyTheHouse = false}
console.log(`Peter has to pay: ${housePrice}`)
console.log(`The value of the house is : ${houseValue}`)
console.log(`Peter should buy the house: ${shouldBuyTheHouse}`)

// julia house measures
wide = 5
deep = 11
high = 8
gardenSizeInM2 = 70
volumeInMeters = wide * deep * high
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
houseValue = 1000000
if (houseValue > housePrice) {
    shouldBuyTheHouse = true
}else {
    shouldBuyTheHouse = false
}
console.log(`Julia has to pay: ${housePrice}`)
console.log(`The value of the house is : ${houseValue}`)
console.log(`Julia should buy the house: ${shouldBuyTheHouse}`)


