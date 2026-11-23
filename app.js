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







    while (billeteValido === false) {
        // Se pide el billete DENTRO del while para que vuelva a preguntar si falla
        billeteIngresado = parseInt(prompt("Ingrese el billete o moneda:"));

        if (isNaN(billeteIngresado) || billeteIngresado <= 0) {
            alert("Por favor, ingrese un número válido.");
        } 
        else if (
            billeteIngresado === rechazarBillete1 || 
            billeteIngresado === rechazarBillete2 || 
            billeteIngresado === rechazarBillete3 || 
            billeteIngresado === rechazarMoneda1
        ) {
            alert("Denominación rechazada ($" + billeteIngresado + "). Intente con otro billete o moneda.");
            // Como billeteValido sigue siendo false, el while vuelve a empezar
        } 
        else {
            alert("Dinero aceptado: $" + billeteIngresado);
            billeteValido = true; // Cambia a true y rompe el ciclo while
        }
    }

    
}

// Llamar a la función
insertarBillete();

//Productos
//Café Suave: 150ml agua + 5g café + 1 vaso.
//Café Fuerte: 150ml agua + 10g café + 1 vaso.
//Café con Leche: 75ml agua + 75ml leche + 8g café + 1 vaso.
//Capuchino: 50ml agua + 100ml leche + 8g café + 1 vaso.
//Té: 150ml agua + 5g té + 1 vaso.





function insertarBillete() {
    let billeteValido = false;
    let billeteIngresado;

    
    do {
        let entrada = prompt("Ingrese el billete o moneda (ej: 2000, 5000, 10000, 20000):");
        
        // Si el usuario presiona Cancelar
        if (entrada === null) {
            alert("Operación cancelada.");
            return false;
        }

        billeteIngresado = parseInt(entrada);


        if (isNaN(billeteIngresado) || billeteIngresado <= 0) {
            alert("Por favor, ingrese un número válido.");
        } 
        else if (
            billeteIngresado === rechazarBillete1 || 
            billeteIngresado === rechazarBillete2 || 
            billeteIngresado === rechazarBillete3 || 
            billeteIngresado === rechazarMoneda1
        ) {
            alert("Denominación rechazada ($" + billeteIngresado + "). Intente con otro billete o moneda.");
        } 
        else {
            saldo = billeteIngresado; // Guardamos el billete aceptado en la variable 'saldo'
            alert("Dinero aceptado. Su saldo actual es: $" + saldo);
            billeteValido = true;
        }
    } while (billeteValido === false);

    return true;
}

    // 3. FUNCIÓN PARA SELECCIONAR BEBIDA

    function seleccionarBebida() {
    let opcionValida = false;

    do {
        let menu = prompt(
            "Saldo actual: $" + saldo + "\n\n" +
            "Seleccione un producto (escriba el número o el nombre):\n" +
            "1. Cafe Suave ($2500)\n" +
            "2. Cafe Fuerte ($3000)\n" +
            "3. Cafe con Leche ($3200)\n" +
            "4. Capuchino ($5000)\n" +
            "5. Te ($2000)"
        );

        if (menu === null) {
            alert("Operación cancelada. Devolviendo su dinero: $" + saldo);
            return;
        }

        let seleccion = menu.trim().toLowerCase();

        

        // Validamos la selección del usuario
   switch (seleccion) {
            case "1":
            
                if (saldo >= precioCafeSuave) {
                    agua -= suaveAgua;
                    cafe -= suaveCafe;
                    vaso--;
                    salidaCafe = true;
                    darCambio = saldo - precioCafeSuave;
                    alert("☕ Preparando Café Suave...\n¡Bebida entregada!\nSu cambio es: $" + darCambio);
                } else {
                    alert("Saldo insuficiente para Café Suave ($2500). Su saldo es: $" + saldo);
                }
                opcionValida = true;
                break;
    
    // CAFÉ FUERTE 

    case "2":
       if (saldo >= precioCafeFuerte) {
                    agua -= fuerteAgua;
                    cafe -= fuerteCafe;
                    vaso--;
                    salidaCafe = true;
                    darCambio = saldo - precioCafeFuerte;
                    alert("☕ Preparando Café Fuerte...\n¡Bebida entregada!\nSu cambio es: $" + darCambio);
                    opcionValida = true;
                } else {
                    alert("Saldo insuficiente para Café Fuerte ($3000). Su saldo es: $" + saldo + ".\nElija una bebida más económica o cancele.");
                }
                break;
    // CAFÉ CON LECHE 

    case "3":
        
        if (saldo >= precioCafeLeche) {
                    agua -= lecheAgua;
                    leche -= lecheCantidad;
                    cafe -= lecheCafe;
                    vaso--;
                    salidaCafe = true;
                    darCambio = saldo - precioCafeLeche;
                    alert("☕ Preparando Café con Leche...\n¡Bebida entregada!\nSu cambio es: $" + darCambio);
                    opcionValida = true;
                } else {
                    alert("Saldo insuficiente para Café con Leche ($3200). Su saldo es: $" + saldo + ".\nElija una bebida más económica o cancele.");
                }
                break;
    
        // CAPUCHINO

    case "4":
        if (saldo >= precioCapuchino) {
                    agua -= capuAgua;
                    leche -= capuLeche;
                    cafe -= capuCafe;
                    vaso--;
                    salidaCafe = true;
                    darCambio = saldo - precioCapuchino;
                    alert("☕ Preparando Capuchino...\n¡Bebida entregada!\nSu cambio es: $" + darCambio);
                    opcionValida = true;
                } else {
                    alert("Saldo insuficiente para Capuchino ($5000). Su saldo es: $" + saldo + ".\nElija una bebida más económica o cancele.");
                }
                break;
    
    // TÉ 

    case "5":
        if (saldo >= precioTe) {
                    agua -= teAgua;
                    te -= teGramos;
                    vaso--;
                    salidaTe = true;
                    darCambio = saldo - precioTe;
                    alert("🍵 Preparando Té Caliente...\n¡Bebida entregada!\nSu cambio es: $" + darCambio);
                    opcionValida = true;
                } else {
                    alert("Saldo insuficiente para Té ($2000). Su saldo es: $" + saldo + ".\nElija una bebida más económica o cancele.");
                }
                break;

            default:
                alert("Opción no válida. Escriba un número del 1 al 5.");
                break;
        }
    } while (opcionValida === false);
}
 

// Primero pide el billete, y si fue válido, abre el menú de bebidas
if (insertarBillete()) {
    seleccionarBebida();
}
