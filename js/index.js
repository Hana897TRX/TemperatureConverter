function load() {
    let btnSend = document.getElementById("btnAccept");
    btnSend.addEventListener("click", send);

    $('select').material_select();
  }

function send() {
    let txtTemp = document.getElementById("txtTemp");
    let temp = txtTemp.value;

    let onlyNumbers = new RegExp("[0-9]+");

    if(temp.length > 0){
        let result = onlyNumbers.exec(temp.toString());
        if(!result || result == null) {
            swal("Ups, Something went wrong!", "You must enter only numbers for temperature!");
            return;
        }
    }
    else{
        swal("Ups, Something went wrong!", "Your temperature is empty!");
        return;
    }

    let opOrigin = parseInt($("#tempOrigin").val());
    let opDestiny = parseInt($("#tempDestiny").val());
    let txtResult = document.getElementById("txtResult");

    console.log(opOrigin);
    console.log(opDestiny);

    switch (opOrigin) {
        case 2: { // Celsius
            switch (opDestiny) {
                case 2: { // Celsius
                    txtResult.value = temp;
                    break;
                }
                case 3: { // Farenheit
                    txtResult.value = (temp * 9/5) + 32;
                    break;
                }
                case 4: { // Kelvin
                    txtResult.value = temp + 273.15;
                    break;
                }
                case 5: { // Renkine
                    txtResult.value = temp * 9/5 + 491.67;
                    break;
                }
                default: {
                    swal("Destiny temp", "You have not selected a destiny temp!");
                    break;
                }
            }
            break;
        }
        case 3: { // Farenheit
            switch (opDestiny) {
                case 2: { // Celsius
                    txtResult.value = (temp - 32) * 5/9;
                    break;
                }
                case 3: { // Farenheit
                    txtResult.value = temp;
                    break;
                }
                case 4: { // Kelvin
                    txtResult.value = (temp - 32) * 5/9 + 273.15;
                    break;
                }
                case 5: { // Renkine
                    txtResult.value = (temp + 459.67);
                    break;
                }
                default: {
                    swal("Destiny temp", "You have not selected a destiny temp!");
                    break;
                }
            }
            break;
        }
        case 4: { // Kelvin
            switch (opDestiny) {
                case 2: { // Celsius
                    txtResult.value = temp - 273.15;
                    break;
                }
                case 3: { // Farenheit
                    txtResult.value = (temp - 273.15) * 9/5 + 32;
                    break;
                }
                case 4: { // Kelvin
                    txtResult.value = temp;
                    break;
                }
                case 5: { // Renkine
                    txtResult.value = 300 * temp * 9/5;
                    break;
                }
                default: {
                    swal("Destiny temp", "You have not selected a destiny temp!");
                    break;
                }
            }
            break;
        }
        case 5: { // Renkine
            switch (opDestiny) {
                case 2: { // Celsius
                    txtResult.value = (temp - 491.67) * 5/9;
                    break;
                }
                case 3: { // Farenheit
                    txtResult.value = temp - 459.67;
                    break;
                }
                case 4: { // Kelvin
                    txtResult.value = temp * 5/9;
                    break;
                }
                case 5: { // Renkine
                    txtResult.value = temp;
                    break;
                }
                default: {
                    swal("Destiny temp", "You have not selected a destiny temp!");
                    break;
                }
            }
            break;
        }
        default: {
            swal("Origin temp", "You have not selected a origin temp!");
            break;
        }
    }
}

addEventListener("DOMContentLoaded", load);
