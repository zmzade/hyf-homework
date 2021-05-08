// peter house measures
let wide = 8;
let deep= 10;
let high = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = wide * deep * high
let houseValue = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let housePrice = 2500000
let shouldBuyTheHouse = housePrice < houseValue;
console.log(`Peter has to pay: ${housePrice}`)
console.log(`The value of the house is : ${houseValue}`)
console.log(`Peter should buy the house: ${shouldBuyTheHouse}`)

// julia house measures
wide = 5
deep = 11
high = 8
gardenSizeInM2 = 70
volumeInMeters = wide * deep * high
houseValue = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
housePrice = 1000000
shouldBuyTheHouse = housePrice < houseValue;
console.log(`Julia has to pay: ${housePrice}`)
console.log(`The value of the house is : ${houseValue}`)
console.log(`Julia should buy the house: ${shouldBuyTheHouse}`)


