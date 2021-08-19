
let boughtCandyPrices = []
function addCandy (candyType, weight){
    if (candyType === 'sweet'){
        pricePerGram = 0.5
    }
    else if (candyType === 'chocolate'){
        pricePerGram = 0.7
    }
    else if (candyType === 'toffee'){
        pricePerGram = 1.1
    }
    else if (candyType === 'chewing-gum'){
        pricePerGram = 0.03
    }else {
        pricePerGram =0
    }
    let price = pricePerGram * weight
    return boughtCandyPrices.push(price)
}

addCandy('sweet', 20);
addCandy('sweet', 50);
addCandy('chocolate', 20);
addCandy('choco', 20);
console.log(boughtCandyPrices);


// second part
let amountToSpend = Math.floor(Math.random() * 100);
    console.log(`The amount I can spend: ${amountToSpend}`);


function canBuyMoreCandy (boughtCandy){
    let sum  = 0;
    for (let i = 0; i < boughtCandy.length; i++){
        sum += boughtCandy[i];    
    }
    console.log(`My candy basket total price: ${sum}`);
    return (sum <= amountToSpend)
}

    console.log(`Can I buy more candy? ${canBuyMoreCandy (boughtCandyPrices)}`)


 