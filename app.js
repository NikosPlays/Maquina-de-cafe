//# Maquina-de-cafe

Entradas (let)
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

Entradas (let)
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
let inventarioMonedas = 50; 
let inventarioBilletes = 20; 

if (cafe < 200 || leche < 500 || te < 200 || agua < 600 || vaso < 10 || azucar < 200) {
    // Mostrar mensaje de alerta:"Inventario bajo, por favor reabastecer maquina"
    console.log("Inventario bajo, por favor reabastecer maquina");
    } 
    else {
    // No mostrar mensaje de alerta
    console.log("Inventario suficiente.");
    }

    if (inventarioMonedas < 10 || inventarioBilletes < 10) {
        // Mostrar mensaje de alerta:"Inventario de monedas o billetes bajo, por favor reabastecer maquina"
        console.log("Inventario de monedas o billetes bajo, por favor reabastecer maquina");
    } else {
        // No mostrar mensaje de alerta
        console.log("Inventario de monedas y billetes suficiente.");

    
}

Salidas (let)
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

if (billeteIngresado === rechazarBillete1 || billeteIngresado === rechazarBillete2 || billeteIngresado === rechazarBillete3) {
    console.log("Billete rechazado. Por favor, inserte otro billete.");
}   

    else {
    console.log("Billete aceptado.");}
    





//Productos
//Café Suave: 150ml agua + 5g café + 1 vaso.
//Café Fuerte: 150ml agua + 10g café + 1 vaso.
//Café con Leche: 75ml agua + 75ml leche + 8g café + 1 vaso.
//Capuchino: 50ml agua + 100ml leche + 8g café + 1 vaso.
//Té: 150ml agua + 5g té + 1 vaso.






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



//Productos con inventario (restas de inventario)


// CAFÉ SUAVE 
switch (opcionSeleccionada) {
    case "Cafe Suave":
        agua = agua - suaveAgua;       // Resta 150 ml de agua
        cafe = cafe - suaveCafe;       // Resta 5g de café
        vaso--;               // Resta 1 vaso
        salidaCafe = true;             // Activa la salida de café
        console.log("Preparando Café Suave...");
        break;
    
    // CAFÉ FUERTE 

    case "Cafe Fuerte":
        agua = agua - fuerteAgua;      // Resta 150 ml de agua
        cafe = cafe - fuerteCafe;      // Resta 10g de café
        vaso--;               // Resta 1 vaso
        salidaCafe = true;             // Activa la salida de café
        console.log("Preparando Café Fuerte...");
        break;
    

    // CAFÉ CON LECHE 

    case "Cafe con Leche":
        agua = agua - lecheAgua;       // Resta 75 ml de agua
        leche = leche - lecheCantidad; // Resta 75 ml de leche
        cafe = cafe - lecheCafe;       // Resta 8g de café
        vaso--;               // Resta 1 vaso
        salidaCafe = true;             // Activa la salida de café
    console.log("Preparando Café con Leche...");
        break;
    
        // CAPUCHINO

    case "Capuchino":
        agua = agua - capuAgua;         // Resta 50 ml de agua
        leche = leche - capuLeche;     // Resta 100 ml de leche
        cafe = cafe - capuCafe;         // Resta 8g de café
        vaso--;                // Resta 1 vaso
        salidaCafe = true;              // Activa la salida de café
    console.log("Preparando Capuchino...");
    break;
    
    // TÉ 

    case "Te":
        agua = agua - teAgua;          // Resta 150 ml de agua
        te = te - teGramos;            // Resta 5g de té
        vaso--;               // Resta 1 vaso
        salidaTe = true;               // Activa la salida de té
    console.log("Preparando Té Caliente...");
    break;
    default:
        console.log("Opción no válida. Por favor, seleccione un producto del menú.");
        break;
}

 
