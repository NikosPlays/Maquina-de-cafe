// Maquina-de-cafe


//Saldo; Nùmero $
//Cafe;, azucar, te, numero. gramos
//Leche; agua, numero. mililitros
//Vaso; numero. unidades
//Inventario monedas/inventario billetes, numero, unidades fisicas

const precioCafeSuave = 2500;
const precioCafeFuerte = 3000;
const precioCafeConLeche = 3200;
const precioCapuchino = 5000;
const precioTe = 2000;


let saldo = 0; // Nùmero $

//Cafe, azucar, te, numero. gramos
let cafe = 1000; 
let azucar = 1000;
let te = 500;

//Leche, agua, numero. mililitros
let leche = 3000; 
let agua = 5000;

//Vaso, numero. unidades
let vaso = 100; 

//Inventario monedas/inventario billetes, numero, unidades fisicas
let inventarioMonedas100 = 50; 
let inventarioMonedas200 = 50;
let inventarioMonedas500 = 50;
let inventarioMonedas1000 = 50;


let inventarioBilletes2000 = 20; 
let inventarioBilletes5000 = 20; 
let inventarioBilletes10000 = 20; 
let inventarioBilletes20000 = 20; 
let inventarioBilletes50000 = 20; 

if (cafe < 200 || leche < 500 || te < 200 || agua < 600 || vaso < 10 || azucar < 200) {
    // Mostrar mensaje de alerta:"Inventario bajo, por favor reabastecer maquina"
    console.log("Inventario bajo, por favor reabastecer maquina");
    } 
    else {
    // No mostrar mensaje de alerta
    console.log("Inventario suficiente.");
    }

    if (
  inventarioMonedas100 < 10 ||
  inventarioMonedas200 < 10 ||
  inventarioMonedas500 < 10 ||
  inventarioMonedas1000 < 10 ||
  inventarioBilletes2000 < 10 ||
  inventarioBilletes5000 < 10 ||
  inventarioBilletes10000 < 10 ||
  inventarioBilletes20000 < 10 ||
  inventarioBilletes50000 < 10
) {
  console.log("Inventario de monedas o billetes bajo, por favor reabastecer maquina");
} else {
  console.log("Inventario de monedas y billetes suficiente.");
}

//Salida cafe/ Salida te. Indicar si se entrego
//Dar cambio, numero $




//Salida cafe/ Salida te. Indicar si se entrego
let salidaCafe = false; 
let salidaTe = false; 

//Dar cambio, numero $
let darCambio = 0; 

//Reglas de negocio
//No acepta billetes de 1.000, 50.000, 100.000
const rechazarBillete1 = 1000;
const rechazarBillete2 = 50000;
const rechazarBillete3 = 100000;

const rechazarMoneda1 = 50;


//Café Suave: 150ml agua + 5g café + 1 vaso.
const suaveAgua = 150;
const suaveCafe = 5;


//Café Fuerte: 150ml agua + 10g café + 1 vaso.
const fuerteAgua = 150;
const fuerteCafe = 10;

//Café con Leche: 75ml agua + 75ml leche + 8g café + 1 vaso.
const lecheAgua = 75;
const lecheCantidad = 75;
const lecheCafe = 8;

//Capuchino: 50ml agua + 100ml leche + 8g café + 1 vaso.
const capuAgua = 50;
const capuLeche = 100;
const capuCafe = 8;

//Té: 150ml agua + 5g té + 1 vaso.
const teAgua = 150;
const teGramos = 5;


// Agregar justo debajo del bloque anterior:
const formSaldo = document.getElementById("balance-form");
const inputSaldo = document.getElementById("balance-input");
const pantallaSaldo = document.getElementById("credit");

function actualizarSaldo() {
  pantallaSaldo.textContent = "$" + saldo;
}




function insertarBillete(billeteIngresado) {
  if (isNaN(billeteIngresado) || billeteIngresado <= 0) {
    alert("Por favor, ingrese un número válido.");
    return;
  }


if (
    billeteIngresado === rechazarBillete1 ||
    billeteIngresado === rechazarBillete2 ||
    billeteIngresado === rechazarBillete3 ||
    billeteIngresado === rechazarMoneda1
  ) {
    alert("Denominación rechazada ($" + billeteIngresado + "). Intente con otro billete o moneda.");
    return;
  }

saldo = saldo + billeteIngresado;
  actualizarSaldo();
  alert("Dinero aceptado: $" + billeteIngresado);
}

formSaldo.addEventListener("submit", function (event) {
  event.preventDefault();
  let billeteIngresado = parseInt(inputSaldo.value);
  insertarBillete(billeteIngresado);
  inputSaldo.value = "";
});

actualizarSaldo  ();

const bandejaDispensador = document.getElementById("dispenser");
const botonesBebida = document.querySelectorAll("[data-select]");










function seleccionarBebida(seleccion) {
   switch (seleccion) {
            case "1":
            
                if (saldo >= precioCafeSuave && agua >= suaveAgua && cafe >= suaveCafe && vaso > 0) {
                    agua = agua - suaveAgua;
                    cafe = cafe - suaveCafe;
                    vaso--;
                    salidaCafe = true;
                    darCambio = saldo - precioCafeSuave;
                    saldo= 0;
                    alert("Preparando Cafe Suave... Su cambio es: $" + darCambio);
                } else {
                    alert("Saldo insuficiente o falta inventario para Cafe Suave.");
                }
                break;
    
    // CAFÉ FUERTE 

            case "2":
                if (saldo >= precioCafeFuerte && agua >= fuerteAgua && cafe >= fuerteCafe && vaso > 0) {
                agua = agua - fuerteAgua;
                cafe = cafe - fuerteCafe;
                vaso--;
                salidaCafe = true;
                darCambio = saldo - precioCafeFuerte;
                saldo = 0;
                actualizarSaldo();
                bandejaDispensador.textContent = "Cafe Fuerte";
                alert("Preparando Cafe Fuerte... Su cambio es: $" + darCambio);
            } else {
                alert("Saldo insuficiente o falta inventario para Cafe Fuerte.");
            }
            break;

    // CAFÉ CON LECHE 

            case "3":
            if (saldo >= precioCafeConLeche && agua >= lecheAgua && leche >= lecheCantidad && cafe >= lecheCafe && vaso > 0) {
                agua = agua - lecheAgua;
                leche = leche - lecheCantidad;
                cafe = cafe - lecheCafe;
                vaso--;
                salidaCafe = true;
                darCambio = saldo - precioCafeConLeche;
                saldo = 0;
                actualizarSaldo();
                bandejaDispensador.textContent = "Cafe con Leche";
                alert("Preparando Cafe con Leche... Su cambio es: $" + darCambio);
            } else {
                alert("Saldo insuficiente o falta inventario para Cafe con Leche.");
            }
            break;
    
        // CAPUCHINO

            case "4":
            if (saldo >= precioCapuchino && agua >= capuAgua && leche >= capuLeche && cafe >= capuCafe && vaso > 0 ) {
                agua = agua - capuAgua;
                leche = leche - capuLeche;
                cafe = cafe - capuCafe;
                vaso--;
                salidaCafe = true;
                darCambio = saldo - precioCapuchino;
                saldo = 0;
                actualizarSaldo();
                bandejaDispensador.textContent = "Capuchino";
                alert("Preparando Capuchino... Su cambio es: $" + darCambio);
            } else {
                alert("Saldo insuficiente o falta inventario para Capuchino.");
            }
            break;
    
    // TÉ 

            case "5":
            if (saldo >= precioTe && agua >= teAgua && te >= teGramos && vaso > 0) {
                agua = agua - teAgua;
                te = te - teGramos;
                vaso--;
                salidaTe = true;
                darCambio = saldo - precioTe;
                saldo = 0;
                actualizarSaldo();
                bandejaDispensador.textContent = "Te";
                alert("Preparando Te... Su cambio es: $" + darCambio);
            } else {
                alert("Saldo insuficiente o falta inventario para Te.");
            }
            break;

            default:
            alert("Opción no válida.");
            break;
        }
        }

        botonesBebida.forEach(function (boton) {
        boton.addEventListener("click", function () {
        seleccionarBebida(boton.dataset.select);
         });
    });


    const salidaBilletes = document.getElementById("bill-output");
    const salidaMonedas = document.getElementById("coin-output");
    const botonDevolverCambio = document.querySelector('[data-action="return-change"]');
    const botonCancelar = document.querySelector('[data-action="cancel"]');
 

    function entregarCambio(cambio) {
        if (cambio <= 0) {
        salidaBilletes.textContent = "";
        salidaMonedas.textContent = "";
        return;
    }

    let restante = cambio;
    let textoBilletes = "";
    let textoMonedas = "";

    while (restante >= 50000 && inventarioBilletes50000 > 0) {
    restante = restante - 50000;
    inventarioBilletes50000--;
    textoBilletes = textoBilletes + "$50.000 ";
  }

    while (restante >= 20000 && inventarioBilletes20000 > 0) {
    restante = restante - 20000;
    inventarioBilletes20000--;
    textoBilletes = textoBilletes + "$20.000 ";
  }

    while (restante >= 10000 && inventarioBilletes10000 > 0) {
    restante = restante - 10000;
    inventarioBilletes10000--;
    textoBilletes = textoBilletes + "$10.000 ";
  }