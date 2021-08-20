// this function control all buttons and set values
function buttonControlandSetValue(productType, productTypeCost) {
    // get #extra-memoryPrice price element
    const memoryPrice = document.getElementById("extra-" + productTypeCost);
    //get #extra-storageCost price element
    const storageCost = document.getElementById("extra-" + productTypeCost);

    //get #extra-deleveryCharge price element
    const deleveryCharge = document.getElementById("extra-" + productTypeCost);


    //set vlaue of extra cost of memory
    if (productType == "memory8gb") {
        memoryPrice.innerText = 0;

    } else if (productType == "memory16gb") {
        memoryPrice.innerText = 180;
    }

    //set vlaue of extra cost of memory
    if (productType == "256gbSSD") {
        storageCost.innerText = 0;
    }
    else if (productType == "512gbSSD") {
        storageCost.innerText = 100;
    }
    else if (productType == "1tbSSD") {
        storageCost.innerText = 180;
    }


    //set vlaue of #extra-deleveryCharge
    if (productType == "free") {
        deleveryCharge.innerText = 0;
    }
    else if (productType == "charge") {
        deleveryCharge.innerText = 20;
    }
    totalPrice();
}


function totalPrice() {
    //get #extra-memoryPrice price in integer
    const memoryPriceValue = parseInt(document.getElementById("extra-memoryPrice").innerText);
    console.log(memoryPriceValue);

    //get #extra-storageCost price in integer
    const storageCostValue = parseInt(document.getElementById("extra-storageCost").innerText);
    console.log(storageCostValue);

    //get #extra-deleveryCharge price in integer
    const deleveryChargeValue = parseInt(document.getElementById("extra-deleveryCharge").innerText);
    console.log(deleveryChargeValue)

    //get #totalPrice element to set totalPrice value
    const totalPrice = document.getElementById("totalPrice");

    const total = 1299 + memoryPriceValue + storageCostValue + deleveryChargeValue;
    totalPrice.innerText = total;
}