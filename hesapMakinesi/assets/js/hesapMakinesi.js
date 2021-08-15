let Number1 = document.getElementById("number1");
let Number2 = document.getElementById("number2");

let toplama = document.getElementById("topla");
let cikarma = document.getElementById("cikar");
let carpma = document.getElementById("carp");
let bolme = document.getElementById("bol");

let result = document.getElementById("result");



    //toplama işlemi
    let toplamaIslemi = () => {
        result.innerHTML = Number(number1.value) + Number(number2.value);
    }

    toplama.addEventListener("click", () => {
        toplamaIslemi(number1,number2);
    })

    //çıkarma işlemi
    let cikartmaIslemi = () => {
        result.innerHTML = Number(number1.value) - Number(number2.value);
    }

    cikarma.addEventListener("click", () => {
        cikartmaIslemi(number1,number2);
    })

    //çarpma işlemi
    let carpmaIslemi = () => {
        result.innerHTML = Number(number1.value) * Number(number2.value);
    }

    carpma.addEventListener("click", () => {
        carpmaIslemi(number1,number2)
    })

    //bölme işlemi
    BolmeIslemi = () => {
        result.innerHTML = (Number(number1.value) / Number(number2.value)).toFixed(2);
    }

    bolme.addEventListener("click", () => {
        BolmeIslemi(number1,number2);
    })