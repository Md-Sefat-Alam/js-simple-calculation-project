function buttonControlandSetValue(productType, productTypeCost) {       // this function control all buttons and set values [একটি function এর মাধ্যমে value set করার চেষ্টা করেছি।]
    const memoryPrice = document.getElementById("extra-" + productTypeCost);        //get #extra-storageCost price element
    const storageCost = document.getElementById("extra-" + productTypeCost);        //get #extra-storageCost price element
    const deleveryCharge = document.getElementById("extra-" + productTypeCost);     //get #extra-deleveryCharge price element

    if (productType == "memory8gb") {       //set vlaue of extra cost of memory
        memoryPrice.innerText = 0;
    } else if (productType == "memory16gb") {
        memoryPrice.innerText = 180;
    }

    if (productType == "256gbSSD") {        //set vlaue of extra cost of memory
        storageCost.innerText = 0;
    } else if (productType == "512gbSSD") {
        storageCost.innerText = 100;
    } else if (productType == "1tbSSD") {
        storageCost.innerText = 180;
    }

    if (productType == "free") {        //set vlaue of #extra-deleveryCharge
        deleveryCharge.innerText = 0;
    } else if (productType == "charge") {
        deleveryCharge.innerText = 20;
    }
    totalPrice();       //calling total function for auto update totalPrice
    totalOfTotalPrice("callFromFunction");      //calling totalOfTotalPrice for auto update pomo code applayed value
}

function totalPrice(pomo) {         //update total price, set (total - discount)
    const memoryPriceValue = parseInt(document.getElementById("extra-memoryPrice").innerText);          //get #extra-memoryPrice price in integer
    const storageCostValue = parseInt(document.getElementById("extra-storageCost").innerText);          //get #extra-storageCost price in integer
    const deleveryChargeValue = parseInt(document.getElementById("extra-deleveryCharge").innerText);    //get #extra-deleveryCharge price in integer

    const totalPrice = document.getElementById("totalPrice");           //get #totalPrice element to set totalPrice value

    const total = 1299 + memoryPriceValue + storageCostValue + deleveryChargeValue;    // totalPrice of products selection
    totalPrice.innerText = total;   //set total to #totalPrice

    //work for pomo code
    const pomoMessage = document.getElementById("pomoMessage");    //geting pomo text field element
    const totalOfTotalPrice = document.getElementById("totalOfTotalPrice");     //get totalOfTotaPrice element

    if (pomo === true) {        //if pomo ===  true discount and set discount on totalOfTotaPrice
        const pomoDiscount = (total * 20) / 100;
        totalOfTotalPrice.innerText = total - pomoDiscount;

        pomoMessage.innerText = "Seccessfully pomo added";      //trying to fancy work
        pomoMessage.style.color = "green";
        totalOfTotalPrice.parentElement.style.backgroundColor = "rgba(0, 128, 0, 0.300)";// pomo code apply করা হলে totalOfTotalPrice এর প্যারেন্ট background color change হবে।
    }
    else if (pomo === false) {      // যদি pomo code apply করে আবার বাটনে ক্লিক করে তাহলে যেন pomo code Discount আর কাজ না করে।
        totalOfTotalPrice.innerText = total;
        pomoMessage.innerText = "Add Pomo code";
        pomoMessage.style.color = "red";
        totalOfTotalPrice.parentElement.style.backgroundColor = "#FECACA";//pomo code apply করা না হলে totalOfTotalPrice এর প্যারেন্ট background color পূর্বের ন্যায় হবে।
    }
}

function totalOfTotalPrice(whoCalling) {    //this function check pomo code and call totalPrice() function to change total price discount
    const pomo = "stevekaku";       // stevekaku is only on pomo code here
    const getPomoElement = document.getElementById("pomo");     //selecting text field of pomo input
    const getPomoInput = document.getElementById("pomo").value; //get value from pomo input text field

    if (whoCalling == "callFromFunction" && getPomoInput == "") {   //using if function for avoid unnecessary result 
        totalPrice(false);    //if call from function and get input emty string then return false
    }
    if (whoCalling == "callFromButton" || whoCalling == "callFromFunction") {       //if call from button || call from function
        if (getPomoInput === pomo) {
            totalPrice(true);
        } else {
            totalPrice(false);
        }
    }
    getPomoElement.value = '';      //get pomo code field reset
}