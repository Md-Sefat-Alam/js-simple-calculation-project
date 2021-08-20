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
    //calling total function for auto update totalPrice
    totalPrice();
    //calling totalOfTotalPrice for auto update pomo code applayed value
    totalOfTotalPrice("callFromFunction");
}


function totalPrice(pomo) {
    //get #extra-memoryPrice price in integer
    const memoryPriceValue = parseInt(document.getElementById("extra-memoryPrice").innerText);

    //get #extra-storageCost price in integer
    const storageCostValue = parseInt(document.getElementById("extra-storageCost").innerText);

    //get #extra-deleveryCharge price in integer
    const deleveryChargeValue = parseInt(document.getElementById("extra-deleveryCharge").innerText);

    //get #totalPrice element to set totalPrice value
    const totalPrice = document.getElementById("totalPrice");

    // totalPrice of products selection
    const total = 1299 + memoryPriceValue + storageCostValue + deleveryChargeValue;
    //set total to #totalPrice
    totalPrice.innerText = total;

    //work for pomo code
    const pomoMessage = document.getElementById("pomoMessage");
    const totalOfTotalPrice = document.getElementById("totalOfTotalPrice");
    if (pomo === true) {
        const pomoDiscount = (total * 20) / 100;
        totalOfTotalPrice.innerText = total - pomoDiscount;

        pomoMessage.innerText = "Seccessfully pomo added";
        pomoMessage.style.color = "green";

    }
    else if (pomo === false) {
        totalOfTotalPrice.innerText = total;
        pomoMessage.innerText = "Don't matched pomo code";
        pomoMessage.style.color = "red";
    }
}

function totalOfTotalPrice(whoCalling) {
    const pomo = "stevekaku";
    const getPomoElement = document.getElementById("pomo");
    const getPomoInput = document.getElementById("pomo").value;

    //using if function for avoid unnecessary result
    //if call from function
    //আমি চাইলেই কুপনটি রিসেট করে দিতে পারতাম কিন্তু কুপন দেওয়ার পরেও যেহেতু উপরের বাটনে ক্লিক করে পরিবর্তন করা যাচ্ছে তার জন্য আমি নিচের সিস্টেমটি তৈরি করেছি যাতে কুপন এর মাধ্যমে কম্পানির লোকসান না হয়। [আসা করি বিষয়টি পসিটিভ্লি নিবেন কেননা ভাইয়া বলেছে বাটোনে ক্লিক করলে ভালু রিসেট হয়ে যাবে]
    if (whoCalling == "callFromFunction" && getPomoInput == "") {
        return;
    }

    //if call from button || call from function
    if (whoCalling == "callFromButton" || whoCalling == "callFromFunction") {
        if (getPomoInput === pomo) {
            totalPrice(true);
        } else {
            totalPrice(false);
        }
    }
}