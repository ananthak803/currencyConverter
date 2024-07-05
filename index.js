

let convertedAmount = 0;
const button =document.querySelector('.btn');
// button.addEventListener("click",changeAmount);
button.addEventListener("click",converter);




function converter(){
    function changeAmount(){
        document.querySelector('#convertedAmount').innerHTML = convertedAmount;
    }
    const amountEntered =document.querySelector('#amount').value;
    const currencyFrom = document.querySelector('#fromc').value;
    const currencyTo = document.querySelector('#toc').value;


    if(currencyFrom == "INR"){
        switch(currencyTo){
            case "INR":
                convertedAmount = amountEntered;
               changeAmount();
            break;
            case "USD":
                convertedAmount = (amountEntered*(0.012*1000))/1000;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*(0.011*1000))/1000;
                changeAmount();
                break;
            case 'AUD':
                convertedAmount = (amountEntered*(0.018*1000))/1000;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*(1.94*100))/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*(0.020*1000))/1000;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*(0.016*1000))/1000;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*(0.016*1000))/1000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*(1.41*100))/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*(1.60*100))/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*(3.33*100))/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom == 'USD'){
        switch(currencyTo){
            case "INR":
                convertedAmount = amountEntered*83;
               changeAmount();
            break;
            case "USD":
                convertedAmount = amountEntered
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*(0.93*100))/100;
                changeAmount();
                break;
            case 'AUD':
                convertedAmount = (amountEntered*(1.49*100))/100;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*(161.70*100))/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*(1.64*100))/100;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*(1.36*100))/100;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*(1.35*100))/100;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*(117.48*100))/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*(133.60*100))/100;
                changeAmount();
                break;
            case 'PKR':
                convertedAmount = (amountEntered*(278.43*100))/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom =='AUD') {
        switch(currencyTo){
            case 'INR':
                convertedAmount = (amountEntered*(56.10*100))/100;
                changeAmount();
                break;
            case 'USD':
                convertedAmount = (amountEntered*(0.67*100))/100;
                changeAmount();
                break;
            case 'EUR':
                convertedAmount = (amountEntered*(0.62*100))/100;
                changeAmount();
                break;
            case 'AUD':
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*(108.42*100))/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*(1.10*100))/100;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*(0.92*100))/100;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*(0.91*100))/100;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*(78.70*100))/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*(89.49*100))/100;
                changeAmount();
                break;
            case 'PKR':
                convertedAmount = (amountEntered*(186.40*100))/100;
                changeAmount();
                break;
        }
    }
    else if (currencyFrom == 'EUR') {
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*9012)/100;
               changeAmount();
            break;
            case "USD":
                convertedAmount = (amountEntered*(1.08*100))/100;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'AUD':
                convertedAmount = (amountEntered*(1.61*100))/100;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*(174.16*100))/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*(1.77*100))/100;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*(1.47*100))/100;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*(1.46*100))/100;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*(126.39*100))/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*(143.73*100))/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*(299.43*100))/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom=='JPY'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*52)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*62)/10000;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*(57))/10000;
                changeAmount();
                break;
            case 'AUD':
                convertedAmount = (amountEntered*92)/10000;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*(0.010*1000))/1000;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*(85))/10000;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*(84))/10000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*73)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*83)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*173)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom=='NZD'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*5106)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*(61))/100;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*(57))/100;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*91)/100;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*9835)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*83)/100;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*826)/1000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*7180)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*8162)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*17018)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom == 'CAD'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*6136)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*74)/100;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*68)/100;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*109)/100;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*11820)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*120)/100;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = amountEntered
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*99)/100;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*8625)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*9805)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*20444)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom == 'SGD'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*6184)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*74)/100;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*68)/100;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*110)/100;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*11914)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*121)/100;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*101)/100;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*8694)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*9883)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*206.07)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom=='BDT'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*71)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*85)/10000;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*79)/10000;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*13)/1000;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*137)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*14)/1000;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*12)/1000;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*12)/1000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = amountEntered;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*114)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*237)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom=='NPR'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*63)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*75)/10000;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*69)/10000;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*11)/1000;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*121)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*12)/1000;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*10)/1000;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*10)/1000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*88)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = amountEntered;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = (amountEntered*209)/100;
                changeAmount();
                break;
        }
    }
    else if(currencyFrom=='PKR'){
        switch(currencyTo){
            case "INR":
                convertedAmount = (amountEntered*30)/100;
                changeAmount();
                break;
            case "USD":
                convertedAmount = (amountEntered*36)/10000;
                changeAmount();
                break;
            case "EUR":
                convertedAmount = (amountEntered*33)/10000;
                break;
            case 'AUD':
                convertedAmount = (amountEntered*53)/10000;
               changeAmount();
                break;
            case 'JPY':
                convertedAmount = (amountEntered*58)/100;
                changeAmount();
                break;
            case 'NZD':
                convertedAmount = (amountEntered*59)/10000;
                changeAmount();
                break;
            case 'CAD':
                convertedAmount = (amountEntered*49)/10000;
                changeAmount();
                break;
            case 'SGD':
                convertedAmount = (amountEntered*49)/10000;
                changeAmount();
                break;
            case 'BDT':
                convertedAmount = (amountEntered*42)/100;
                changeAmount();
                break;
            case 'NPR':
                convertedAmount = (amountEntered*48)/100;
                changeAmount();
                break;
           case 'PKR':
                convertedAmount = amountEntered;
                changeAmount();
                break;
        }
    }
}


